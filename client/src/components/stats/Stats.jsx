import React, { useEffect, useState } from 'react';
import classes from './stats.module.css';
import { request } from '../../util/fetchAPI';

const Stats = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await request('/statistics', 'GET');
        setStats(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchStats();
  }, []);

  return (
          <div className={classes.container}>
              <div className={classes.wrapper}>
                  <div className={classes.titles}>
                      <h4>Site Statistics</h4>
                  </div>
                  <div className={classes.stats}>
                      <div className={classes.left}>
                          {stats?.propertyCount} Properties
                      </div>
                      <div className={classes.right}>
                          {stats?.userCount} Users
                      </div>
                  </div>
              </div>
          </div>
  );
};

export default Stats;