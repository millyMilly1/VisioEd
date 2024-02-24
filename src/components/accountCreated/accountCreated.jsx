import React from 'react';
import LanguageSelector from "../languageSelector/languageSelector";
import "./accountCreated.css";


const AccountCreated = () => {
  return (
    
    <div className="account-created-2pK">
      <div className="frame-7-NNP">
        <div className="frame-11-5Xh">
          <p className="allearn-RrT">VisioEd</p>
          <p className="inclusive-learning-where-education-speaks-to-you-js9">Inclusive Learning - Where Education Speaks to you.</p>
        </div>
        <div className="pngwing-3-T2T"></div>
        <p className="a-e-learning-platform-for-all-9vs">An E-learning platform for all...</p>
      </div>
      <div className="frame-6-2jm">
        <div className="frame-18-Kym">
          <div className="frame-11-FcX">
           <LanguageSelector />
          </div>
          <img className="vector-1-211" src="REPLACE_IMAGE:76:2274" alt="ReplaceImage"/>
          <div className="frame-17-N4s">
            <button className="read-aloud-JjD">Read aloud</button>
            <img className="fluent-speaker-1-32-filled-qj9" src="../../assets/images/fluent-speaker-1-32-filled-xHq.png" alt="Fluent Speaker"/>
          </div>
        </div>
        <div className="frame-43-mco">
          <div className="component-13-hmM">
            <img className="pngwing-1-p5H" src="../../assets/images/pngwing-1.png" alt="PNG_Wing"/>
          </div>
          <div className="frame-19-ZHm">
            <p className="account-created-usR">Account created</p>
            <p className="congratulations-your-account-has-been-successfully-created-3Cw">Congratulations! Your account has been successfully created.</p>
          </div>
        </div>
        <div className="frame-30-YvP">
          <button className="continue-to-profile-setup-G5h" type="button">Continue to profile setup</button>
          <img className="ic-round-arrow-forward-zXV" src="./ic-round-arrow-forward-FpF.png" alt="Arrow Forward"/>
        </div>
      </div>
    </div>
  );
}

export default AccountCreated;
