import './Search.css';
import { useState, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { searchCharacter } from '../../actions';

function Search(props) {
  const { searchCharacter } = props;
  const [term, setTerm] = useState('');

  const navigate = useNavigate();
  const returnToHome = useCallback(() => navigate('/', { replace: true }), [navigate]);


  function searchCharacterers(e) {
   
    returnToHome();
    setTerm(e.target.value);
    searchCharacter(term)

  }



  return (
    <div className="Search">
      <div className="search">
        <input type="text" className="search__input" onKeyUp={searchCharacterers} placeholder="Busque por um personagem..." />
        <div className="search__icon">
          <FaSearch />
        </div>
      </div>
    </div>
  );
}



const mapStateToProps = store => ({
  searchTerm: store.searchState,
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchCharacter }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(Search);

