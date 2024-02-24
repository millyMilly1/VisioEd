import React from 'react';
import "./loginPage.css";
import LanguageSelector from "../languageSelector/languageSelector";
import { Link } from 'react-router-dom';

const loginPage = () => {
  return (
    <div className="macbook-pro-14-14-Lqq">
    <div className="frame-7-gPu">
      <div className="frame-11-1wy">
        <p className="allearn-aEP">visioEd</p>
        <p className="inclusive-learning-where-education-speaks-to-you-H8o">Empower Minds, Share Knowledge, Bridge Disability.</p>
      </div>
      <p className="a-e-learning-platform-for-all-aNo">An E-learning platform for all...</p>
    </div>
  
    <div className="frame-6-Jpb">
      <div className="frame-18-JCK">
        <LanguageSelector />
        <div className="frame-17-Atj">
          <button className="read-aloud-Jzw">Read Aloud<img className="fluent-speaker-1-32-filled-FQP" src="../../assets/images/fluent-speaker-1-32-filled-Zas.png" alt="Fluent_speaker_icon" /></button>
          
        </div>
      </div>
      <div className="frame-20-ZR5">
        <p className="create-an-account-sgf">Log in account</p>
        <p className="welcome-lets-kickstart-your-journey-to-start-your-learning-experience-simply-fill-in-the-details-below-P9D">
          Welcome! Let's kickstart your journey.
          <br />
          To start your learning experience, simply enter login details.
        </p>
      </div>
      <div className="frame-13-Gyh">
        <button className="frame-13-Dtw" type="submit"><img className="" src='../../assets/images/flat-color-icons-google-3Q7.png' alt='google_image' />Continue with Google</button>
        
        <p className="or-uWs">OR</p>
        <div className="frame-12-SFu">
          <div className="frame-10-147">
            <div className="frame-3-xzw">
              <input className="frame-2-ijD" type="text" placeholder="Email address" />
              <input className="frame-3-ESf" type="password" placeholder="Password" />
            </div>
        
          </div>
          <button className="frame-11-k5Z" type="submit">Log in</button>
        </div>
      </div>
      <div className="frame-6-RhV">
        <p className="you-already-have-an-account-n2F">
        You do not have an account? <Link to="/createAccount" className='createAccount'> Create one here!</Link>
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default loginPage