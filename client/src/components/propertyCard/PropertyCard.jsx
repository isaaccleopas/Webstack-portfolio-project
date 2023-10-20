import React, { useEffect, useState } from 'react';
import { request } from '../../util/fetchAPI';
import PropertyCard from './PropertyCard'; // Create a PropertyCard component for displaying a single property

const Home = () => {
  const [latestProperties, setLatestProperties] = useState([]);

  useEffect(() => {
    const fetchLatestProperties = async () => {
      try {
        // Make an API request to fetch the latest properties (sorted by creation date, limited to 4)
        const data = await request('/property/latest?limit=4', 'GET');
        setLatestProperties(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchLatestProperties();
  }, []);

  return (
    <div>
      <h2>Latest Properties</h2>
      <div>
        {latestProperties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
