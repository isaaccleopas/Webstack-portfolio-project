import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import classes from './hero.module.css'

const Hero = () => {
  const [propertyType, setPropertyType] = useState("house")
  const [category, setCategory] = useState("0")
  const [priceRange, setPriceRange] = useState("0")

  const handleSearch = () => {

  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let's Find Your Dream Property</h2>
        <div className={classes.options}>
          <select onChange={(e) => setPropertyType(e.target.value)}>
            <option disabled>Select Type</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option disabled>Select Category</option>
            <option value="0">For Sale</option>
            <option value="2">For Rent</option>
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
          <AiOutlineSearch className={classes.searchIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Hero