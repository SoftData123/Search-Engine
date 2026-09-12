import { useState, useEffect } from "react";
import Trie from "./trie/Trie";
import words from "./data/words";

import SearchBar from "./components/SearchBar";
import Suggestions from "./components/Suggestions";
import SearchResults from "./components/SearchResults";

import logo from "./assets/logo web.png";

const trie = new Trie();

function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    words.forEach((item) => {
      trie.insert(
        item.keyword.toLowerCase(),
        item.url
      );
    });

    document.body.classList.remove("dark");
  }, []);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      setResults([]);
      setActiveIndex(-1);
      return;
    }

    const result = trie.search(
      query.toLowerCase()
    );

    setSuggestions(result);
    setResults(result);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setActiveIndex(
        (prev) =>
          (prev + 1) % suggestions.length
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setActiveIndex(
        (prev) =>
          (prev - 1 + suggestions.length) %
          suggestions.length
      );
    }

    if (
      e.key === "Enter" &&
      activeIndex >= 0
    ) {
      window.open(
        suggestions[activeIndex].url,
        "_blank"
      );
    }
  };

  const toggleTheme = () => {
    const nextTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(nextTheme);

    document.body.classList.toggle(
      "dark"
    );
  };

  return (
    <div className="container">

      {/* Animated Background */}
      <div className="background-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Theme Button */}
      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {theme === "light"
          ? "🌙"
          : "☀️"}
      </button>

      <div className="content">

        {/* Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="logo"
        />

        {/* Company Name */}
        <h2 className="company-name">
          Powered By Data-Software Analysis 
        </h2>

        {/* Search Engine Title */}
        <h1>
          DSORA
        </h1>

        {/* Search Bar */}
        <SearchBar
          onSearch={handleSearch}
          onKeyDown={handleKeyDown}
        />

        {/* Suggestions */}
        <Suggestions
          suggestions={suggestions}
          activeIndex={activeIndex}
          onSelect={(url) =>
            window.open(
              url,
              "_blank"
            )
          }
        />

        {/* Search Results */}
        <SearchResults
          results={results}
        />

      </div>
    </div>
  );
}

export default App;