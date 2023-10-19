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
      <>
          <section className="stats bg-light" id="stat">
              <div className="container py-5">
                  <div className="stats-content text-center my-3">
                      <h3 className="display-4">Stats</h3>
                  </div>
                  <div className="row m-auto justify-content-center align-items-center">
                      <div className="col-md-6 col-sm-12 text-center">
                          <h4 className="display-6 py-5">Properties</h4>
                          <div className="rounded-circle border border-2 border-primary d-flex justify-content-center align-items-center ">
                              <p className="num display-4">
                                  {stats?.propertyCount}
                              </p>
                          </div>
                      </div>

                      <div className="col-md-6 col-sm-12 text-center">
                          <h4 className="display-6 py-5">Users</h4>
                          <div className="rounded-circle border border-2 border-primary d-flex justify-content-center align-items-center">
                              <p className="num display-4">
                                  {stats?.userCount}
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <div className={classes.container}>
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
          </div> */}
      </>
  );
};

export default Stats;