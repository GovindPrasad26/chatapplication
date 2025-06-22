// import './search.css';

// function Search() {
//   return (
//     <div className="search">
//       <i className="bi bi-search"></i>
//       <input type="text" placeholder="Hi dude, searching..." />
//     </div>
//   );
// }

// export default Search;

import './search.css';

function Search({ onSearch }) {
  return (
    <div className="search">
      <i className="bi bi-search"></i>
      <input
        type="text"
        placeholder="Search chat..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
