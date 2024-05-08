import React from 'react';
import './fill-profile-fSs.css';
import LanguageSelector from '../languageSelector/languageSelector';
import speaker from "../../assets/images/fluent-speaker-1-32-filled-1Th.png";

const CreateBio = () => {
  return (
    <div>
      <main className="fill-profile-ynj">
        <header className="frame-7-vhy">
          <nav className="frame-11-RPq">
            <h1 className="allearn-zC3">ALLearn</h1>
            <ol className="frame-24-uZu">
              <li className="frame-22-foy">
                <span className="frame-21-DKh">1</span>
                <p className="select-user-type-hVm">Select user type</p>
                <img className="gg-check-o-Dyu" src="../../assets/gg-check-o-kzf.png" alt="Checkmark icon" />
              </li>
              <li className="auto-group-ux6k-xwV">
                <div className="frame-23-JEf">
                  <span className="frame-21-Eu1">2</span>
                  <p className="input-bio-8Dh">Input bio</p>
                </div>
                <div className="frame-24-FJK">
                  <span className="frame-21-abV">3</span>
                  <p className="input-institution-URy">Input institution</p>
                </div>
                <div className="frame-25-oz3">
                  <span className="frame-21-Lyy">4</span>
                  <p className="select-proficiency-dy5">Select proficiency</p>
                </div>
              </li>
            </ol>
          </nav>
          <figure className="m001t0323j18sep22-1-Mu5">
          </figure>
          <p className="a-e-learning-platform-for-all-54P">A E-learning platform for all...</p>
        </header>
        <section className="frame-6-ZET">
          <header className="frame-18-Tqd">
            <div className="frame-11-aQT">
              <LanguageSelector />
            </div>
            <img className="vector-1-xR1" src="REPLACE_IMAGE:76:2918" alt="User profile icon" />
            <div className="frame-17-Vvj">
              <p className="read-aloud-Sb5">Read aloud</p>
              <img className="fluent-speaker-1-32-filled-FQP" src={speaker} alt="Fluent speaker icon" />
            </div>
          </header>
          <article className="frame-20-VZM">
            <h2 className="create-bio-EWw">Create bio</h2>
            <p className="tell-us-a-little-details-about-yourself-mWs">Tell us a little details about yourself</p>
          </article>
          <form className="frame-44-trP">
            <div className="frame-3-Sd1">
              <label htmlFor="name" className="your-name-1RD">Your name</label>
              <div className="frame-35-js1">
                <select className="frame-2-V5V" aria-label="Title">
                  <option value="Mr">Mr</option>
                  <option value="Mr">Mrs</option>
                  <option value="Mr">Miss</option>
                  <option value="Mr">Master</option>
                </select>
                <input type="text" id="firstName" className="frame-4-KKR" aria-label="First name" placeholder='First name' required />
                <input type="text" id="lastName" className="frame-3-R7Z" aria-label="Last name" placeholder='Last name' required />
              </div>
            </div>
            <div className="frame-36-Kij">
              <label htmlFor="birthday" className="your-birthday-gpB">Your birthday</label>
              <div className="frame-32-EKu">
                <div className="frame-2-BF9">
                  <input type="number" id="day" className="item-26-jXZ" min="1" max="31" aria-label="Day" placeholder='DD' required />
                  <img className="mingcute-down-fill-UEF" src="../../assets/mingcute-down-fill-Erf.png" alt="Dropdown icon" />
                </div>
                <div className="frame-4-o1d">
                  <input type="number" id="month" className="item-04-x9R"  min="1" max="12" aria-label="Month" placeholder='MM' required />
                  <img className="mingcute-down-fill-UNf" src="../../assets/mingcute-down-fill-U2X.png" alt="Dropdown icon" />
                </div>
                <div className="frame-5-oQw">
                  <input type="number" id="year" className="item-1950-XLw"  min="1900" max="2023" aria-label="Year" placeholder='YY' required />
                  <img className="mingcute-down-fill-TVV" src="../../assets/mingcute-down-fill-Ji7.png" alt="Dropdown icon" />
                </div>
              </div>
            </div>
            <div className="frame-37-aa7">
              <label htmlFor="phone" className="your-phone-number-97R">Your phone number</label>
              <div className="frame-32-gNF">
                <div className="frame-2-2h1">
                  <div className="frame-39-nAP">
                    <img className="emojione-v1-flag-for-nigeria-wJB" src="../../assets/emojione-v1-flag-for-nigeria-7nT.png" alt="Nigerian flag" />
                    <p className="item-234-fjy">+234</p>
                  </div>
                  <img className="mingcute-down-fill-Cju" src="../../assets/mingcute-down-fill-vXm.png" alt="Dropdown icon" />
                </div>
                <input type="tel" id="phone" className="frame-5-87m" aria-label="Phone number" placeholder='9012345678' required />
              </div>
            </div>
          </form>
          <button className="frame-45-1xF">
            <p className="next-kuq">Next</p>
            <img className="ic-round-arrow-forward-hKH" src="../../assets/ic-round-arrow-forward-hmu.png" alt="Arrow icon" />
          </button>
        </section>
      </main>
    </div>
  );
}

export default CreateBio;
