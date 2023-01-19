import { useState,useEffect } from 'react';
import './CardEpisode.css';
import { getEpisode } from "../../services/requests"



function CardEpisode(props) {

  const [response, setResponse] = useState({});

  async function getResults(params) {
    await getEpisode(params).then((res) => setResponse(res));
  }

  useEffect(() => {
    getResults(props.episode);
  }, [props.episode]);


  return (
    <div className="CardEpisode" >
      <div className="main">
        <div className="chip">
        {response.name && <p className='name'>{response.name}</p>}

          <p className='status'>

            Data de exibição {response.air_date}</p>


            {response.location && <p className='location'>
            Episódio {response.location.name}
          </p>}
        </div>
      </div>
    </div>

  );



}


export default CardEpisode;
