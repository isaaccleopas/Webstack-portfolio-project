import React, { useState, useEffect, useRef } from 'react';
import classes from './propertyDetail.module.css';
import Naira from 'react-naira';
import { FaBed, FaSquareFull } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { request } from '../../util/fetchAPI';
import { useParams } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const PropertyDetail = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [propertyDetail, setPropertyDetail] = useState(null);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const formRef = useRef();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await request(`/property/${id}`, 'GET');
        setPropertyDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  const handleCloseForm = () => {
    setShowForm(false);
    setRating(0);
    setComment('');
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const submitReview = async (e) => {
    e.preventDefault();

    if (!propertyDetail || !propertyDetail._id) {
      console.error('propertyDetail is undefined or missing _id');
      return;
    }

    try {
      const options = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await request(`/property/${propertyDetail._id}/review`, 'POST', options, {
        rating: rating,
        comment: comment,
      });

      if (response) {
        const status = response.status || 'Unknown';

        if (status >= 200 && status < 300) {
          const updatedProperty = await response.json();
          setPropertyDetail(updatedProperty);

          // Provide user feedback or reset the form fields
          setReviewSubmitted(true); // Set to true after review submission
        } else {
          console.error(`Failed to add a review. Status: ${status}`);
        }
      } else {
        console.error('Received an unexpected response.');
      }
    } catch (error) {
      console.error('An error occurred while making the request:', error);
    }
  };  
  
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
        <img src={`https://real-estate-hw4h.onrender.com/images/${propertyDetail?.images}`} alt=''/>
        </div>
        <div className={classes.right}>
        <h3 className={classes.title}>
          Title: {`${propertyDetail?.title}`}
        </h3>
        <div className={classes.details}>
          <div className={classes.typeAndCategory}>
            <div>Type: <span>{`${propertyDetail?.propertyType}`}</span></div>
            <div>Category: <span>{`${propertyDetail?.category}`}</span></div>
          </div>
          <div className={classes.priceAndLocation}>
            <span className={classes.price}><span>Price: </span><Naira>{parseFloat(propertyDetail?.price)}</Naira></span>
            <span className={classes.location}>Location: {`${propertyDetail?.location}`}</span>
          </div>
          <div className={classes.moreDetails}>
            {propertyDetail?.propertyType === 'House' ? (
              <span>{propertyDetail?.bedrooms} Bedrooms <FaBed className={classes.icon} /></span>
            ) : (
              <span>{propertyDetail?.squareMeter} Square Meters <FaSquareFull className={classes.icon} /></span>
            )}
            <span className={classes.contact}>Contact Owner: {user.contact}</span>
          </div>
        </div>
        <p className={classes.description}>
          Description: <span>{`${propertyDetail?.description}`}</span>
        </p>
        <button onClick={() => setShowForm(true)} className={classes.review}>
          Review
        </button>
        </div>
        
      </div>
      {propertyDetail?.reviews.length > 0 && (
          <div className={classes.existingReviews}>
          <h3>Reviews</h3>
          {propertyDetail?.reviews.map((review) => (
            <div key={review._id}>
              <div className={classes.rating}>Rating: {review.rating}</div>
              <div className={classes.comment}>Comment: {review.comment}</div>
              <div className={classes.reviewer}>Review By: {user.username}</div>
            </div>
          ))}
        </div>
          )}
      {showForm && (
          <div className={classes.pageCover} onClick={handleCloseForm}>
            <div className={classes.reviewFormWrapper}>
              <div className={classes.reviewFormContainer} onClick={(e) => e.stopPropagation()}>
                <h2>Write Your Review</h2>
                <form ref={formRef} onSubmit={submitReview}>
                  <input
                    type="number"
                    name="rating"
                    value={rating}
                    min={1}
                    max={5}
                    onChange={handleRatingChange}
                  />
                  <input
                    type="text"
                    placeholder="Comment"
                    name="comment"
                    value={comment}
                    onChange={handleCommentChange}
                  />
                  {reviewSubmitted ? ( // Render feedback after review submission
                    <p>Your review has been submitted!</p>
                  ) : (
                    <button type="submit">Submit Review</button>
                  )}
                </form>
                <AiOutlineClose onClick={handleCloseForm} className={classes.removeIcon} />
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default PropertyDetail;