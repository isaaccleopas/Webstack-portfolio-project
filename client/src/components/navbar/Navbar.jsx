import React, { useState } from 'react';
import classes from './navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { BsHouseDoor } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineClose, AiOutlineFileImage} from 'react-icons/ai'
import { logout } from '../../redux/authSlice';
import { request } from '../../util/fetchAPI';

const Navbar = () => {
  const [state, setState] = useState({})
  const [photo, setPhoto] = useState("")
  const [showForm, setShowForm] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/signin')
  }

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCloseForm = () => {
    setShowForm(false)
    setPhoto(null)
    setState({})
  }

  const handleListProperty = async(e) => {
    e.preventDefault()

    let filename = null
    if(photo){
      const formData = new FormData()
      filename = photo.name
      formData.append('images', filename)
      formData.append('images', photo)

      await request('/property/upload', "POST", {}, formData, true)

    }else {
      return
    }

    try {
      const options = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }

      await request('/property', "POST", options, {...state, images: filename})
      handleCloseForm()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link className={classes.left}>
          ID Properties <BsHouseDoor />
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Listings</li>
          <li className={classes.listItem}>Stats</li>
        </ul>
        <div className={classes.right}>
          {!user ? 
            <>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </>
            :
            <>
              <span>Hello {user.username}</span>
              <span onClick={handleLogout} className={classes.logoutBtn}>Logout</span>
              <Link onClick={() => setShowForm(true)} className={classes.list}>
                List your property
              </Link>
            </>
          }
        </div>
      </div>
      {
        showForm && (
          <div className={classes.listPropertyForm} onClick={handleCloseForm}>
            <div className={classes.listPropertyWrapper} onClick={(e) => e.stopPropagation()}>
              <h2>List Property</h2>
              <form onSubmit={handleListProperty} encType="multipart/form-data">
                <input type="text" placeholder='Title...' name='title' onChange={handleState} />
                <input type="text" placeholder='Description...' name='description' onChange={handleState} />
                <input type="number" placeholder='Price...' name='price' onChange={handleState} />

                {/* Property Type select */}
                <select name='propertyType' onChange={handleState}>
                  <option value=''>Select Property Type</option>
                  <option value='House'>House</option>
                  <option value='Land'>Land</option>
                </select>

                {/* Category select */}
                <select name='category' onChange={handleState}>
                  <option value=''>Select Category</option>
                  <option value='For Sale'>For Sale</option>
                  <option value='For Rent'>For Rent</option>
                </select>

                <input type="text" placeholder='Location...' name='location' onChange={handleState} />

                {state.propertyType === 'House' && (
                  <input type="number" placeholder='Bed Rooms...' name='bedrooms' step={1} min={2} onChange={handleState} />
                )}

                {state.propertyType === 'Land' && (
                  <input type="number" placeholder='Sq. Meter...' name='squareMeter' onChange={handleState} />
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '50%' }}>
                  <label htmlFor='photo'>Property picture <AiOutlineFileImage /></label>
                  <input type="file" id="photo" style={{ display: 'none' }} onChange={(e) => setPhoto(e.target.files[0])} />
                  {photo && <p>{photo.name}</p>}
                </div>
                <button>List Property</button>
              </form>
              <AiOutlineClose onClick={handleCloseForm} className={classes.removeIcon} />
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Navbar;
