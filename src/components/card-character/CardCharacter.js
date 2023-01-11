import './CardCharacter.css';
import { FaRegDotCircle,FaListUl,FaLocationArrow } from 'react-icons/fa';


function CardCharacter() {
  return (
    <div className="CardCharacter">
      <div class="chip">
        <img src='https://mixdeseries.com.br/wp-content/uploads/2021/07/rick-and-morty-s5-5-1.webp'></img>
        <br></br>
        <p className='name'>Rick</p>
        <p className='status'>

          <FaRegDotCircle /> Alive - Human</p>


        <p className='location'>
          <FaLocationArrow /> Earth (Replacement Dimension)
        </p>
        <br></br>

        <div class="btn btn__secondary"><p>Ver mais</p></div>
      </div>


    </div>

  );
}

export default CardCharacter;
