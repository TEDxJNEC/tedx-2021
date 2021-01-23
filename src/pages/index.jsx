import logo from '../logo.svg';
import '../App.scss';
import DefaultLayout from '../layouts'
import Footer from '../components/Footer';

function Home() {
    return (
        <DefaultLayout>
        <div className='App'>
                <img src={logo} className='App-logo' alt='logo' />
                <h1 className='App-headline'>KINTSUGI</h1>
        </div>
        </DefaultLayout>
    );
}

export default Home;
