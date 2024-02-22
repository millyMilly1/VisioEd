import React from 'react';
import "./createAccount.css";
import LanguageSelector from "../languageSelector/languageSelector";


const createAccount = () => {
  return (
    <div className="macbook-pro-14-14-Lqq">
    <div className="frame-7-gPu">
      <div className="frame-11-1wy">
        <p className="allearn-aEP">visioEd</p>
        <p className="inclusive-learning-where-education-speaks-to-you-H8o">Inclusive Learning - Where Education Speaks to you.</p>
      </div>
      <p className="a-e-learning-platform-for-all-aNo">An E-learning platform for all...</p>
    </div>
  
    <div className="frame-6-Jpb">
      <div className="frame-18-JCK">
        <LanguageSelector />
  
        <div className="frame-17-Atj">
          <button className="read-aloud-Jzw">Read aloud</button>
          <img className="fluent-speaker-1-32-filled-FQP" src="../../assets/images/fluent-speaker-1-32-filled-Zas.png" alt="Fluent speaker icon" />
        </div>
      </div>
      <div className="frame-20-ZR5">
        <p className="create-an-account-sgf">Create an account</p>
        <p className="welcome-lets-kickstart-your-journey-to-start-your-learning-experience-simply-fill-in-the-details-below-P9D">
          Welcome! Let's kickstart your journey.
          <br />
          To start your learning experience, simply fill in the details below.
        </p>
      </div>
      <div className="frame-13-Gyh">
        <button className="frame-13-Dtw" type="submit">Continue with Google</button>
        <p className="or-uWs">OR</p>
        <div className="frame-12-SFu">
          <div className="frame-10-147">
            <div className="frame-3-xzw">
              <input className="frame-2-ijD" type="text" placeholder="Email address" />
              <input className="frame-3-ESf" type="password" placeholder="Password" />
              <input className="frame-4-kA7" type="password" placeholder="Confirm Password" />
            </div>
  
            <div className="frame-7-E5H">
              <input type="checkbox" id="agree" name="agree" className="carbon-checkbox-im9" />
              <label htmlFor="agree" className="frame-4-TCw">
                <p>I agree to the 
                <span className="terms-of-service-9bZ"> terms of service</span>
                <span className="and-HSs">and</span>
                <span className="privacy-policy-S4s">privacy policy</span>
                </p>
              </label>
            </div>
          </div>
          <button className="frame-11-k5Z" type="submit">Create account</button>
        </div>
      </div>
      <div className="frame-6-RhV">
        <p className="you-already-have-an-account-n2F">
          You already have an account? 
          <a href="visioEd" className="log-in-here-usZ"> Log in here</a>
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default createAccount