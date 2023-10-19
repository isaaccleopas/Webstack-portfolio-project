/** @format */

import React, { useEffect, useState } from 'react';
import Naira from 'react-naira';
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
    const [showAll, setShowAll] = useState(false);

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

    const displayProperties = showAll ? properties : properties.slice(0, 4);

    return (
        <>
            <div className="listings section bg-light" id="listing">
                <div className="container-lg py-5">
                    <div className="list-head text-center">
                        <h3 className="listhead display-3">Listed Properties</h3>
                        <p className="listTxt">Find your dream home.</p>
                    </div>
                    <div className="row w-100 m-auto justify-content-center gap-2">
                        {displayProperties.map((property) => (
                            <div className="col-md-5 col-sm-12">
                                <div
                                    key={property._id}
                                    className={classes.property}
                                >
                                    <div className="card">
                                        <Link
                                            to={`/propertyDetail/${property._id}`}
                                            className=""
                                        >
                                            <img src={img} alt="" />
                                        </Link>
                                        <div className="card-body p-0">
                                            <h4 className="list-title display-5 px-3 pt-3">
                                                {property.title}
                                            </h4>
                                            <p className="card-text px-3 py-2">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Ipsam, consectetur accusantium
                                                ad perferendis esse qui!
                                            </p>
                                            <p className="card-text px-3 py-1 display-6">
                                                Price:
                                                <Naira>
                                                    {parseFloat(
                                                        property?.price
                                                    )}
                                                </Naira>
                                            </p>
                                            <div className="d-flex bg-light justify-content-evenly">
                                                {property.propertyType ===
                                                'House' ? (
                                                    <div className="border-end py-3 px-2">
                                                        {property.bedrooms}{' '}
                                                        Bedrooms{' '}
                                                        <FaBed
                                                            className={
                                                                classes.icon
                                                            }
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="border-end py-3 px-2">
                                                        {property.squareMeter}{' '}
                                                        Square Meters{' '}
                                                        <FaSquareFull
                                                            className={
                                                                classes.icon
                                                            }
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Properties;
