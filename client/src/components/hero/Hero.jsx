import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import classes from './hero.module.css';

const Hero = () => {
  const [propertyType, setPropertyType] = useState('House');
  const [category, setCategory] = useState('0');
  const [priceRange, setPriceRange] = useState('0');
  const navigate =useNavigate()

  const handleSearch = async () => {
    navigate(`/properties?propertyType=${propertyType}&category=${category}&priceRange=${priceRange}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let's Find Your Dream Property</h2>
        <div className={classes.options}>
          <select onChange={(e) => setPropertyType(e.target.value)}>
            <option disabled>Select Type</option>
            <option value="House">House</option>
            <option value="Land">Land</option>
          </select>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option disabled>Select Category</option>
            <option value="0">For Sale</option>
            <option value="1">For Rent</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">100,000-1,000,000</option>
            <option value="1">1,000,000-5,000,000</option>
            <option value="2">5,000,000-10,000,000</option>
            <option value="3">10,000,000-20,000,000</option>
            <option value="4">20,000,000-100,000,000</option>
            <option value="5">100,000,000 and Above</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default Hero;