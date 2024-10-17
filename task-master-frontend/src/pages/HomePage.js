import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Task Manager</h1>
            <div>
                <nav> 
                <Link to='/contact'> Contact Us</Link>
                {/* <Link to='/login'>Get started</Link> */}
                </nav>
            </div>
        </div>
    )
} 
export default Home;