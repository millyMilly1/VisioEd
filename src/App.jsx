import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
 import TestFile from "./components/testfolder/testfile";
 import CreateAccount from './components/createAccount/createAccount';
 import AccountCreated from './components/accountCreated/accountCreated';
 import LoginPage from './components/loginPage/loginPage';
import CreateBio from './components/createBio/createBio';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Specify paths relative to the application's root */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/Loginpage" element={<LoginPage />} />
        <Route path="/accountCreated" element={<AccountCreated />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/testfile" element={<TestFile />} />
        <Route path="/createBio" element={<CreateBio />} />
      </Routes>
    </Router>
  );
};

export default App;

/*<Router>
      <Routes>
        {/* Specify paths relative to the application's root /}
        <Route path="/" element={<LoginPage />} />
        <Route path="/Loginpage" element={<LoginPage />} />
        <Route path="/accountCreated" element={<AccountCreated />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/testfile" element={<TestFile />} />
      </Routes>
    </Router>
    */

