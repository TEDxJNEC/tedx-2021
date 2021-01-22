import logo from "../assets/logo.svg";
import "../common/main.scss";

function Home() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1 className={"App-headline"}>KINTSUGI</h1>
			</header>
		</div>
	);
}

export default Home;
