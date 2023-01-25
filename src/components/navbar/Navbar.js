import './Navbar.css';
import { FaHeart } from 'react-icons/fa';
import Search from '../search/Search';
import { connect } from 'react-redux';
import { Outlet, Link } from "react-router-dom";


function Navbar(props) {
    const { favoritos } = props;

    return (
        <div>
            <div className="Navbar">
                <div className="container">
                    <Link to='/'><h2>Home</h2></Link>
                    <Search />
                    <div className='favorites'>
                        <FaHeart size={'30'} className="icon-favorite" />
                        <label>{favoritos.length}</label>
                        <div className='list-favorites'>
                            {favoritos.map((data) => (
                                <div className='row-character' >
                                    <img src={data.image} alt='' />
                                    <label>{data.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
const mapStateToProps = store => ({
    favoritos: store.favoriteState,
});




export default connect(mapStateToProps)(Navbar);