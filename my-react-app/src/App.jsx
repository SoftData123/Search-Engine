import { useEffect, useState } from "react";
import Trie from "./trie/Trie";
import words from "./Data/words";
import SearchBar from "./components/SearchBar";
import Suggestions from "./components/Suggestions";
import logo from "./assets/logo.jpeg";

const trie = new Trie();

function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [theme, setTheme] = useState("light");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    words.forEach(item => trie.insert(item.keyword.toLowerCase(), item.url));

    const hour = new Date().getHours();
    const autoTheme = hour >= 19 || hour < 6 ? "dark" : "light";
    setTheme(autoTheme);
    document.body.classList.toggle("dark", autoTheme === "dark");

    const savedHistory = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(savedHistory);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  const handleSearch = (query) => {
    if (!query) {
      setSuggestions([]);
      setActiveIndex(-1);
      return;
    }

    const lower = query.toLowerCase();
    const exact = trie.exactSearch(lower);

    if (exact) {
      saveHistory(query);
      window.open(exact, "_blank");
      setSuggestions([]);
      return;
    }

    setSuggestions(trie.search(lower));
    setActiveIndex(-1);
  };

  const saveHistory = (query) => {
    const updated = [query, ...history.filter(h => h !== query)].slice(0, 5);
    setHistory(updated);
    localStorage.setItem("history", JSON.stringify(updated));
  };

  const removeHistoryItem = (item) => {
    const updated = history.filter(h => h !== item);
    setHistory(updated);
    localStorage.setItem("history", JSON.stringify(updated));
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") setActiveIndex(i => (i + 1) % suggestions.length);
    if (e.key === "ArrowUp") setActiveIndex(i => (i - 1 + suggestions.length) % suggestions.length);
    if (e.key === "Enter" && activeIndex >= 0) {
      window.open(suggestions[activeIndex].url, "_blank");
      saveHistory(suggestions[activeIndex].keyword);
      setSuggestions([]);
    }
  };

  return (
    <div className="container">
      {/* Theme toggle icon */}
      <div className="theme-toggle-icon" onClick={toggleTheme}>
        {theme === "dark" ? "☀️" : "🌙"}
      </div>

      <img src={logo} alt="Company Logo" className="company-logo" />

      <div className="company-name">
        Data-Software Analysis Pvt. Ltd.
      </div>

      <h3 className="search-title">Search Engine (Browser)</h3>

      <SearchBar onSearch={handleSearch} onKeyDown={handleKeyDown} />

      <Suggestions
        suggestions={suggestions}
        activeIndex={activeIndex}
        onSelect={(url, keyword) => {
          saveHistory(keyword);
          window.open(url, "_blank");
          setSuggestions([]);
        }}
        history={history}
        onRemoveHistory={removeHistoryItem}
      />
    </div>
  );
}

export default App;
