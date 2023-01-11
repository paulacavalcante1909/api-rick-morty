import './Search.css';
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
    <div className="Search">
      <div class="search">
        <input type="text" class="search__input" placeholder="Busque por um personagem..."></input>
        <div class="search__icon">
        <FaSearch />
        </div>
      </div>
    </div>
  );
}

export default Search;
