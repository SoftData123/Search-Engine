const Suggestions = ({ suggestions, activeIndex, onSelect, history, onRemoveHistory }) => {
  if (!suggestions.length && !history.length) return null;

  return (
    <ul>
      {history.map((item, i) => (
        <li key={`h-${i}`} className="history">
          🕘 {item}
          <span
            className="remove-history"
            onMouseDown={(e) => {
              e.stopPropagation();
              onRemoveHistory(item);
            }}
          >
            ×
          </span>
        </li>
      ))}

      {suggestions.map((item, index) => (
        <li
          key={index}
          className={index === activeIndex ? "active" : ""}
          onMouseDown={() => onSelect(item.url, item.keyword)}
        >
          {item.keyword}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
