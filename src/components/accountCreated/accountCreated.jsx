import React from 'react';
import LanguageSelector from "../languageSelector/languageSelector";
import "./accountCreated.css";
import { Link } from 'react-router-dom';
import speaker from "../../assets/images/fluent-speaker-1-32-filled-1Th.png";




const AccountCreated = () => {
  return (
    
    <div className="account-created-2pK">
  <header className="frame-7-NNP">
    <div className="frame-11-5Xh">
      <h1 className="allearn-RrT">VisioEd</h1>
      <p className="inclusive-learning-where-education-speaks-to-you-js9">
        Inclusive Learning - Where Education Speaks to you.
      </p>
    </div>
    <figure className="pngwing-3-T2T"></figure>
    <p className="a-e-learning-platform-for-all-9vs">An E-learning platform for all...</p>
  </header>

  <main className="frame-6-2jm">
    <nav className="frame-18-Kym">
      <div className="frame-11-FcX">
        <LanguageSelector />
      </div>
      <img className="vector-1-211" src="REPLACE_IMAGE:76:2274" alt="User profile icon" />
      <div className="frame-17-N4s">
        <button className="read-aloud-JjD" aria-label="Read aloud">
          Read aloud
          <img className="fluent-speaker-1-32-filled-FQP" src={speaker} alt="Fluent speaker icon" />
        </button>
      </div>
    </nav>

    <section className="frame-43-mco">
      <figure className="component-13-hmM">
        <img className="pngwing-1-p5H" src="../../assets/images/pngwing-1.png" alt="PNG Wing" />
      </figure>
      <div className="frame-19-ZHm">
        <h2 className="account-created-usR">Account created</h2>
        <p className="congratulations-your-account-has-been-successfully-created-3Cw">
          Congratulations! Your account has been successfully created.
        </p>
      </div>
    </section>

    <div className="frame-30-YvP">
      <button className="continue-to-profile-setup-G5h" type="button">
        <Link to="/createBio">Continue to profile setup!</Link>
      </button>
      <img
        className="ic-round-arrow-forward-zXV"
        src="./ic-round-arrow-forward-FpF.png"
        alt="Arrow Forward"
      />
    </div>
  </main>
</div>

  );
}

export default AccountCreated;
