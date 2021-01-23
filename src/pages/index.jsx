import logo from '../assets/logo.svg';
import DefaultLayout from '../layouts'
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
