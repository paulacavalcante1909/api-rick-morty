import './Home.css';

import { getCharacters, searchCharacters } from "../../services/requests"
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchCharacter } from '../../actions';

import CardCharacter from '../../components/card-character/CardCharacter';


function Home(props) {


  const [response, setResponse] = useState([]);
  const { searchCharacter, searchTerm } = props;

  useEffect(() => {
    getCharacters().then((res) => setResponse(res.results));
  }, []);


  function getResults(params) {
    searchCharacters(params).then((res) => setResponse(res.results));
  }

  useEffect(() => {
    getResults(searchTerm.newValue);
  }, [searchTerm]);


  return (
    <div className="Home">
      <div className="container">

       

        <div className='flex-container'>
          {response.map((data) => (
            <CardCharacter key={data.id} character={data} />
          ))}

        </div>
      </div>

    </div>
  );
}




const mapStateToProps = store => ({
  searchTerm: store.searchState
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchCharacter }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(Home);



