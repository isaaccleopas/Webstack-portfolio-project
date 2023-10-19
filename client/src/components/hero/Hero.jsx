import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import classes from './hero.module.css'
import { Link } from 'react-router-dom';

const Hero = () => {
  const [propertyType, setPropertyType] = useState('House');
  const [category, setCategory] = useState('0');
  const [priceRange, setPriceRange] = useState('0');
  const navigate =useNavigate()

  const handleSearch = async () => {
    navigate(`/properties?propertyType=${propertyType}&category=${category}&priceRange=${priceRange}`);
  };

  return (
    <>
     <div className="showcase">
        <div
          id="homecarousel"
          className="con container-fluid carousel slide p-0"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
              <div
                  id="homecarousel"
                  className="con container-fluid carousel slide p-0"
                  data-bs-ride="carousel"
              >
                  <div className="carousel-indicators">
                      <div
                          data-bs-target="#homecarousel"
                          data-bs-slide-to="0"
                          className="active"
                      ></div>
                      <div
                          data-bs-target="#homecarousel"
                          data-bs-slide-to="1"
                      ></div>
                  </div>

                  <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                          <div className="carousel-caption d-flex flex-column h-100 text-white top:0 align-items-start justify-content-center">
                              <h1 className="text-center text-md-start display-md-6 display-3 text-uppercase">
                                  Find Your Dream Home
                              </h1>
                              <p className="text-center text-md-start">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Expedita aspernature tenetur
                                  accusamus. Esse neque, alias quo est totam
                                  fugit atque inventore officiis pariatur
                                  maiores delectus eligendi quos minus
                                  reiciendis quod?
                              </p>
                              <Link
                                  to='/signup'
                                  className="btn btn-primary my-3 align-self-center align-self-md-start"
                              >
                                  Get started
                              </Link>
                          </div>
                          <img
                              src={require('./estate_bg2.jpg')}
                              className="w-100 d-block"
                              alt="Second slide"
                          />
                      </div>
                      <div className="carousel-item">
                          <div className="carousel-caption d-flex flex-column h-100 text-white top:0 align-items-start justify-content-center">
                              <h1 className="text-center text-md-start display-md-6 display-3 text-uppercase">
                                  Find Your Dream Home
                              </h1>
                              <p className="text-center text-md-start">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Expedita aspernature tenetur
                                  accusamus. Esse neque, alias quo est totam
                                  fugit atque inventore officiis pariatur
                                  maiores delectus eligendi quos minus
                                  reiciendis quod?
                              </p>
                              <Link to='/signup'
                                  className="btn btn-primary my-3 align-self-center align-self-md-start"
                              >
                                  Get started
                              </Link>
                          </div>
                          <img
                              src={require('./estate_bg2.jpg')}
                              className="w-100 d-block"
                              alt="Second slide"
                          />
                      </div>
                  </div>
                  <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#homecarousel"
                      data-bs-slide="prev"
                  >
                      <span className="carousel-control-prev-icon d-none d-md-block"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#homecarousel"
                      data-bs-slide="next"
                  >
                      <span className="carousel-control-next-icon d-none d-md-block"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>
              <div className="overlay"></div>
          </div>

          <div className="advanceSearch section">
              <div className="container-lg">
                  <div className="tabs">
                      <span className="tab tab-border" id="tab-1">
                          Sales
                      </span>
                      <span className="tab bg-primary text-light" id="tab-2">
                          Rental
                      </span>
                      <span className="tab" id="tab-3">
                          Sold
                      </span>
                  </div>
                  <form
                      action=""
                      className="tab-content m-auto p-4 show rounded-2"
                      id="Sales"
                  >
                      <div className="mb-3">
                          <label for="" className="form-label"></label>
                          <select
                              onChange={(e) => setPropertyType(e.target.value)}
                              class="form-select form-select-lg"
                              name=""
                              id="propertyType"
                          >
                              <option disabled>Property Catergories</option>
                              <option value="house">Houses</option>
                              <option value="land">Land</option>
                              <option value="Flat">Flat/Apartment</option>
                              <option value="commercial">
                                  Commercial Property
                              </option>
                          </select>
                      </div>
                      <div className="row">
                          <div className="col">
                              <div className="mb-3">
                                  <label for="" className="form-label"></label>
                                  <select
                                      onChange={(e) =>
                                          setPropertyType(e.target.value)
                                      }
                                      class="form-select form-select-lg"
                                      name="sel"
                                      id="category"
                                  >
                                      <option disabled>
                                          Property Catergories
                                      </option>
                                      <option value="0">For Rent</option>
                                      <option value="1">For Sell</option>
                                  </select>
                              </div>
                          </div>
                          <div className="col">
                              <div className="mb-3">
                                  <label for="" className="form-label"></label>
                                  <select
                                      onChange={(e) =>
                                          setPropertyType(e.target.value)
                                      }
                                      class="form-select form-select-lg"
                                      name="sel"
                                      id="category"
                                  >
                                      <option disabled>Select Price Range</option>
                                      <option value="0">
                                          100,000-1,000,000
                                      </option>
                                      <option value="1">
                                          1,000,000-5,000,000
                                      </option>
                                      <option value="2">
                                          5,000,000-10,000,000
                                      </option>
                                      <option value="3">
                                          10,000,000-20,000,000
                                      </option>
                                      <option value="4">
                                          20,000,000-100,000,000
                                      </option>
                                      <option value="5">
                                          100,000,000 and Above
                                      </option>
                                  </select>
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="mb-3 col-4">
                              <label for="square-meter" className="form-label">
                                  Square Meter
                              </label>
                              <input
                                  type="text"
                                  name="square-meter"
                                  id="square-meter"
                                  className="form-control py-2"
                                  placeholder="SQM"
                              />
                          </div>

                          <div class="mb-3 col-4">
                              <label for="max-price" className="form-label">
                                  Max Price
                              </label>
                              <input
                                  type="text"
                                  name="price"
                                  id="max-price"
                                  class="form-control py-2"
                                  placeholder="000000"
                              />
                          </div>

                          <div className="mb-3 col-4">
                              <label for="min-price" className="form-label">
                                  Min Price
                              </label>
                              <input
                                  type="text"
                                  name="price"
                                  id="min-price"
                                  className="form-control py-2"
                                  placeholder="000000"
                              />
                          </div>
                      </div>
                      <button
                          type="submit"
                          className="btn btn-primary w-100 p-3"
                      >
                          Search
                      </button>
                  </form>
              </div>
          </div>
      </>
  );
}

export default Hero;
