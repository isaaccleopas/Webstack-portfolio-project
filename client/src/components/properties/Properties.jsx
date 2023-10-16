import React, { useEffect, useState } from 'react';
import Naira from 'react-naira'
import { request } from '../../util/fetchAPI';
import img from '../../assets/images-1696518700597-206369980.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBed, FaSquareFull } from 'react-icons/fa';
import classes from './properties.module.css';
import { arrPriceRanges } from '../../util/idxToPriceRange';
import { categoryToIdx } from '../../util/idxToCategory';
import { AiOutlineSearch } from 'react-icons/ai';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [state, setState] = useState(null);
  const query = (useLocation().search).slice(1)
  const arrQuery = query.split("&")
  const navigate = useNavigate()

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

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

  useEffect(() => {
    if(arrQuery && properties?.length > 0 && state === null){
      let formattedQuery = {}

      arrQuery.forEach((option, idx) => {
        const key = option.split("=")[0]
        const value = option.split("=")[1]

        formattedQuery = {...formattedQuery, [key]: value}

        if(idx === arrQuery.length - 1){
          setState(formattedQuery)
          handleSearch(formattedQuery)
        }
      })
    }
  }, [properties, arrQuery])

  const handleSearch = (param = state) => {
    let options;
  
    if (param?.nativeEvent) {
      options = state;
    } else {
      options = param;
    }
  
    console.log('Options:', options);
    const filteredProperties = properties.filter((property) => {
      const priceRange = arrPriceRanges[options.priceRange];
      console.log('Price Range:', priceRange);
  
      if (priceRange) {
        const priceRangeParts = priceRange.split('-');
  
        if (priceRangeParts.length === 2) {
          const minPrice = Number(priceRangeParts[0]);
          const maxPrice = Number(priceRangeParts[1]);
          const category = categoryToIdx(property.category);
  
          return (
            property.propertyType === options.propertyType &&
            category === Number(options.category) &&
            property.price >= minPrice &&
            property.price <= maxPrice
          );
        }
      }
      return false;
    });
  
    const queryStr = `propertyType=${options.propertyType}&category=${options.category}&priceRange=${options.priceRange}`;
  
    navigate(`/properties?${queryStr}`, { replace: true });
    setFilteredProperties(filteredProperties);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let us find your dream place now</h2>
        <div className={classes.options}>
        <select name="propertyType" onChange={handleState}>
            <option disabled>Select Type</option>
            <option value="House">House</option>
            <option value="Land">Land</option>
          </select>
          <select name="category" onChange={handleState}>
            <option disabled>Select Category</option>
            <option value="0">For Sale</option>
            <option value="1">For Rent</option>
          </select>
          <select name="priceRange" onChange={handleState}>
            <option disabled>Select Price Range</option>
            <option value="0">100,000-1,000,000</option>
            <option value="1">1,000,000-5,000,000</option>
            <option value="2">5,000,000-10,000,000</option>
            <option value="3">10,000,000-20,000,000</option>
            <option value="4">20,000,000-100,000,000</option>
            <option value="5">100,000,000 and Above</option>
          </select>
          <button className={classes.searchBtn}>
            <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
          </button>
        </div>
        {filteredProperties?.length > 0 ? (
          <>
          <div className={classes.titles}>
            <h5>Selected Properties</h5>
          </div>
          <div className={classes.properties}>
            {filteredProperties.map((property) => (
              <div key={property._id} className={classes.property}>
                <Link className={classes.imgContainer} to={`/propertyDetail/${property._id}`}>
                  <img src={property.img ? `/http://localhost:5000/images/${property.images}` : img} alt=''/>
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
          </>
        ) : <h2 className={classes.noProperty}>We have no properties with the specified options</h2>}
      </div>
    </div>
  );
};

export default Properties;