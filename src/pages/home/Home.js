import './Home.css';

import Search from '../../components/search/Search';
import CardCharacter from '../../card-character/CardCharacter';
function Home() {
  return (
    <div className="Home">
      <div className='container'>
      <Search></Search>
     
      <CardCharacter></CardCharacter>

     
      </div>
    </div>
  );
}

export default Home;
