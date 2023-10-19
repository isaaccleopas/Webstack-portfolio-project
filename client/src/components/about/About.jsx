/** @format */

import React from 'react';

const About = () => {
    return (
        <>
        <section className="about section" id="about">
            <div class="container-lg text-center py-5">
                <div class="row gap-2 gap-lg-0 m-auto justify-content-center">
                    <div class="col-md-5 col-sm-12 rounded-2">
                            <img src={require("./about-bg.png")} alt="" class="image-fluid rounded-2"/>
                    </div>
                    <div class="col-md-5 col-sm-12 order-1 align-self-center">
                        <h3 class="about-title display-4">Who we are</h3>
                <p class="about lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos iure ipsa minus consectetur libero asperiores minima inventore, necessitatibus soluta error nobis quidem fuga obcaecati illum tempora in dignissimos quia.
                </p>
                    </div>
                </div>
            </div>
        </section>
        </>
)
}

export default About
