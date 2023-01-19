import './Character.css';
import { useParams } from 'react-router-dom';
import { getCharactersId } from "../../services/requests"
import { useState, useEffect } from 'react';
import CardEpisode from '../../components/card-episode/CardEpisode'
function Character() {


  const [response, setResponse] = useState({});

  const { id } = useParams();

  async function getResults(params) {
    await getCharactersId(params).then((res) => setResponse(res));
  }

  useEffect(() => {
    getResults(id);
  }, [id]);

  return (
    <div className="Character">
      <div className="container">
        <h1 className='title'>{response.name}</h1>
        <img src={response.image} className="pic-char"/>
       
        <div className='description'>
        
          <h1>Gender: {response.gender}</h1>
          <h1>Status: {response.status}</h1>
          {response.location && <h1>Current Location: {response.location.name}</h1>}
          {response.origin && <h1>Origin: {response.origin.name}</h1>}
          <h1>Species: {response.species}</h1>
          <h1>Type: {response.type ? response.type  : 'Não informado'}</h1>
        </div>
        
        <div className='episodes'>
        <h1>Episodes:</h1>
        {response.episode  &&

        response.episode.map((data) => (
            <CardEpisode key={data.id} episode={data} />
          ))}
        </div>
      </div>
    </div>
  );
}






export default Character;



