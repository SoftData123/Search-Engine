const SearchResults = ({ results }) => {
  if (!results.length) return null;

  return (
    <div className="results">
      {results.map((item, index) => (
        <div className="card" key={index}>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <h3>{item.keyword}</h3>
          </a>

          <p>{item.url}</p>

          <span>
            Visit website
          </span>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;