import React from 'react';
import './createAccount.css';
import LanguageSelector from '../languageSelector/languageSelector';
import { Link } from 'react-router-dom';
import speaker from "../../assets/images/fluent-speaker-1-32-filled-1Th.png";



const CreateAccount = () => {
  return (
    <div className="macbook-pro-14-14-Lqq">
  <header className="frame-7-gPu">
    <div className="frame-11-1wy">
      <h1 className="allearn-aEP">visioEd</h1>
      <p className="inclusive-learning-where-education-speaks-to-you-H8o">Inclusive Learning - Where Education Speaks to you.</p>
    </div>
    <p className="a-e-learning-platform-for-all-aNo">An E-learning platform for all...</p>
  </header>

  <main className="frame-6-Jpb">
    <nav className="frame-18-JCK">
      <LanguageSelector />
      <div className="frame-17-Atj">
        <button className="read-aloud-Jzw" aria-label="Read aloud">
          Read aloud
          <img className="fluent-speaker-1-32-filled-FQP" src={speaker} alt="Fluent speaker icon" />
        </button>
      </div>
    </nav>

    <section className="frame-20-ZR5">
      <h2 className="create-an-account-sgf">Create an account</h2>
      <p className="welcome-lets-kickstart-your-journey-to-start-your-learning-experience-simply-fill-in-the-details-below-P9D">
        Welcome! Let's kickstart your journey. <br />
        To start your learning experience, simply fill in the details below.
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
            <input className="frame-4-kA7" type="password" placeholder="Confirm Password" aria-label="Confirm Password" required />
          </div>
          <div className="frame-7-E5H">
            <input type="checkbox" id="agree" name="agree" className="carbon-checkbox-im9" required />
            <label htmlFor="agree" className="frame-4-TCw">
              <p>
                I agree to the
                <span className="terms-of-service-9bZ"> terms of service</span>
                <span className="and-HSs">and</span>
                <span className="privacy-policy-S4s">privacy policy</span>
              </p>
            </label>
          </div>
        </div>
        <button type="submit" className="frame-11-k5Z"><Link className='createacctbtn' to='/accountCreated'>Create account</Link></button>
      </form>
    </div>

    <div className="frame-6-RhV">
      <p className="you-already-have-an-account-n2F">
        You already have an account? <Link to="/LoginPage" className="log-in-here-usZ">Log in here!</Link>
      </p>
    </div>
  </main>
</div>

  );
}

export default CreateAccount;
