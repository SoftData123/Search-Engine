import { useState, useEffect } from "react";

const languages = {
  en: "Type to search...",
  hi: "खोजने के लिए टाइप करें...",
  mr: "शोधण्यासाठी टाइप करा..."
};

const SearchBar = ({ onSearch, onKeyDown }) => {
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const timer = setTimeout(() => onSearch(query), 300);
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const startVoice = () => {
    if (!("webkitSpeechRecognition" in window)) return;

    const rec = new window.webkitSpeechRecognition();
    rec.lang = lang === "hi" ? "hi-IN" : lang === "mr" ? "mr-IN" : "en-US";
    rec.start();

    rec.onresult = (e) => {
      const text = e.results[0][0].transcript.toLowerCase();
      setQuery(text);
    };
  };

  return (
    <>
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          value={query}
          placeholder={languages[lang]}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <span className="voice-icon" onClick={startVoice}>🎤</span>
      </div>

      <select
        className="lang-select"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="hi">HI</option>
        <option value="mr">MR</option>
      </select>
    </>
  );
};

export default SearchBar;
