import { useState, useEffect, useRef } from "react";

const SearchBar = ({ onSearch, onKeyDown }) => {
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const voiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice search is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;

    setListening(true);

    recognition.start();

    recognition.onresult = (event) => {
      const text =
        event.results[0][0].transcript;

      setQuery(text);
      onSearch(text);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
    inputRef.current.focus();
  };

  return (
    <div className="search-box">

      {/* Search Icon */}
      <span className="search-icon">
        🔍
      </span>

      {/* Search Input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search websites, keywords, topics..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        onKeyDown={onKeyDown}
      />

      {/* Clear Button */}
      {query && (
        <button
          className="clear-btn"
          onClick={clearSearch}
        >
          ✖
        </button>
      )}

      {/* Voice Search */}
      <button
        className={`voice-btn ${
          listening ? "listening" : ""
        }`}
        onClick={voiceSearch}
      >
        🎤
      </button>
    </div>
  );
};

export default SearchBar;