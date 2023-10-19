import React from 'react'
import classes from './newsletter.module.css'

const Newsletter = () => {
  return (
    <>
      <section className="newsletter bg-primary">
            <div className="container-lg py-5">
                <div className="newsHead text-center pb-3">
                    <h3 className="display-5 text-light">Subscribe to our newsletter</h3>
                </div>
                <form action="" className="newsForm">
                        <div className="input-group mb-3">
                            <input type="text" class="form-control py-2" placeholder="Email"/>
                            <button className="btn btn-secondary" type="button" id="button-addon2">Subscribe</button>
                        </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Newsletter