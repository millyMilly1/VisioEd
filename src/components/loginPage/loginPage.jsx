import React from 'react';
import "./loginPage.css";
import LanguageSelector from "../languageSelector/languageSelector";
import { Link } from 'react-router-dom';
import speaker from "../../assets/images/fluent-speaker-1-32-filled-1Th.png";


const loginPage = () => {
  return (
    <div className="macbook-pro-14-14-Lqq">
  <header className="frame-7-gPu">
    <div className="frame-11-1wy">
      <h1 className="allearn-aEP">visioEd</h1>
      <p className="inclusive-learning-where-education-speaks-to-you-H8o">Empower Minds, Share Knowledge, Bridge Disability.</p>
    </div>
    <p className="a-e-learning-platform-for-all-aNo">An E-learning platform for all...</p>
  </header>

  <main className="frame-6-Jpb">
    <div className="frame-18-JCK">
      <LanguageSelector />
      <div className="frame-17-Atj">
        <button className="read-aloud-Jzw" aria-label="Read aloud">
          Read Aloud
          <img className="fluent-speaker-1-32-filled-FQP" src={speaker} alt="Fluent speaker icon" />
        </button>
      </div>
    </div>

    <section className="frame-20-ZR5">
      <h2 className="create-an-account-sgf">Log in account</h2>
      <p className="welcome-lets-kickstart-your-journey-to-start-your-learning-experience-simply-fill-in-the-details-below-P9D">
        Welcome! Let's kickstart your journey. <br />
        To start your learning experience, simply enter login details.
      </p>
    </section>

    <div className="frame-13-Gyh">
      <button className="frame-13-Dtw" type="button" aria-label="Continue with Google">
        Continue with Google
      </button>
      <p className="or-uWs">OR</p>
      <form className="frame-12-SFu">
        <div className="frame-10-147">
          <div className="frame-3-xzw">
            <input className="frame-2-ijD" type="email" placeholder="Email address" aria-label="Email address" required />
            <input className="frame-3-ESf" type="password" placeholder="Password" aria-label="Password" required />
          </div>
        </div>
        <button className="frame-11-k5Z" type="submit">Log in</button>
      </form>
    </div>

    <div className="frame-6-RhV">
      <p className="you-already-have-an-account-n2F">
        You do not have an account? <Link to="/createAccount" className='createAccount'> Create one here!</Link>
      </p>
    </div>
  </main>
</div>
  
  )
}

export default loginPage