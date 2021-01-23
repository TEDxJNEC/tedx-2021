import logo from '../logo.svg';
import '../App.scss';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <>
        <Navbar />
        <div className='App'>
            
            
                <img src={logo} className='App-logo' alt='logo' />
                <h1 className={'App-headline'}>KINTSUGI</h1>
           
            <Footer />
        </div>
        </>
    );
}

export default Home;
