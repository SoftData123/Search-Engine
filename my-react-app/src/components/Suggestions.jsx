const Suggestions = ({
  suggestions,
  activeIndex,
  onSelect
}) => {
  if (!suggestions.length) return null;

  return (
    <ul className="suggestions">
      {suggestions.map((item, index) => (
        <li
          key={index}
          className={
            activeIndex === index ? "active" : ""
          }
          onMouseDown={() =>
            onSelect(item.url, item.keyword)
          }
        >
          🔍 {item.keyword}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;