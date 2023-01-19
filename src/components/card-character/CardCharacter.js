import { useState } from 'react';
import './CardCharacter.css';
import { FaRegDotCircle, FaLocationArrow, FaRegHeart, FaHeart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { favoriteButton, unfavoriteCharacter } from '../../actions';

import Modal from '../modal/Modal'



function CardCharacter(props) {


  const [showDetails, setShowDetails] = useState(false);
  const [character, setCharacter] = useState(props.character);
  const { favoritos, favoriteButton, unfavoriteCharacter } = props;


  async function favoriteTrigger() {

    if (!favoritos.includes(character)) {
      await favoriteButton(character);
    }
    else {
      await unfavoriteCharacter(character)
    }
    console.log(favoritos);
  }

  function openDetails() {
    setShowDetails(true);
  }

  function closeDetails() {
    setShowDetails(false);
  }



  return (
    <div className="CardCharacter" >
      <div className="main">
        <div className="chip">

          <img src={character.image} alt='' />

          <br></br>

          <p className='name'>{character.name}</p>
          <div className="btn btn__secondary btn-favorite" onClick={favoriteTrigger} >

            {!favoritos.includes(character) && <FaRegHeart />}

            {favoritos.includes(character) && <FaHeart className="icon-favorite" />}

          </div>

          <p className='status'>

            <FaRegDotCircle /> {character.status} - {character.species}</p>

          <p className='location'>
            <FaLocationArrow /> {character.location.name}
          </p>

          <br></br>

          <div className="btn btn__secondary" onClick={openDetails}>
            <p>
              Ver mais
            </p>
          </div>
        </div>
      </div>


      {showDetails && <Modal closeModal={closeDetails} header={"Mais detalhes de " + character.name}

        body={

          <div className='container-details-character'>
            <img className='pic-character' src={character.image} alt='' />
            <div className='details'>
              <label><b>Status: </b>{character.status}</label>
              <label><b>Species: </b>{character.species}</label>
              <label><b>Type: </b>{character.type}</label>
              <label><b>Gender: </b>{character.gender}</label>
              <label><b>Origin: </b>{character.origin.name}</label>

              <Link to={'/character/' + character.id}>
                <div className="btn btn__secondary" >
                  <p>
                    Ver completo
                  </p>
                </div>
              </Link>

            </div>
            {/* <label><b>Location:</b>{character.location.name}</label>
            <label><b>Episodes:</b>{character.location.name}</label> */}
          </div>
        }

        footer={null}>

      </Modal>}


    </div>

  );



}




const mapStateToProps = store => ({
  favoritos: store.favoriteState
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ favoriteButton, unfavoriteCharacter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardCharacter);
