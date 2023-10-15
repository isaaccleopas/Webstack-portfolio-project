import React, { useEffect, useState } from 'react';
import Naira from 'react-naira'
import { request } from '../../util/fetchAPI';
import img from '../../assets/images-1696518700597-206369980.png';
import { Link } from 'react-router-dom';
import { FaBed, FaSquareFull } from 'react-icons/fa';
import classes from './properties.module.css';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await request('/property/', 'GET');
        setProperties(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Property Listings</h5>
        </div>
        <div className={classes.properties}>
          {properties.map((property) => (
            <div key={property._id} className={classes.property}>
              <Link to={`/propertyDetail/${property._id}`} className={classes.imgContainer}>
                <img src={property.img ? `/http://localhost:5000/images/${property.images}` : img} alt="" />
              </Link>
              <div className={classes.details}>
                <div className={classes.price}>
                  <span className={classes.price}>
                    <Naira>{parseFloat(property?.price)}</Naira>
                  </span>
                </div>
                <div className={classes.moreDetails}>
                  {property.propertyType === 'House' ? (
                    <span>{property.bedrooms} Bedrooms <FaBed className={classes.icon} /></span>
                  ) : (
                    <span>{property.squareMeter} Square Meters <FaSquareFull className={classes.icon} /></span>
                  )}
                </div>
                <div className={classes.description}>{property?.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;