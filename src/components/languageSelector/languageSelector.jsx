import React, { useState } from 'react';
import "./languageSelector.css";

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('English(USA)');
  const languages = ['English(USA)', 'Spanish', 'French', 'German', 'Yoruba', 'Igbo', 'Hausa'];

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="language-selector">
      <div className="language-display">

      <select value={selectedLanguage} onChange={handleLanguageChange}>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
}

export default LanguageSelector;