import logo from '../assets/logo.svg';
import "../common/main.scss";
import DefaultLayout from '../layouts'
// DELETE AFTER TESTING
import Highlights from "components/Highlights"
import highlightData from "assets/highlights.json"

//END DELETE
function Home() {
    // DELETE AFTER TESTING
    const renderHighlightData =()=>{
        return highlightData.map((data)=>{
            const {label,images,youtubeVideos}=data;
            return (
                <Highlights label={label} images={images} youtubeVideos={youtubeVideos} />
            )
        })
    }
    //END DELETE
    return (
        <DefaultLayout>
        <div className='App'>
                <img src={logo} className='App-logo' alt='logo' />
                <h1 className='App-headline'>KINTSUGI</h1>
        </div>
        {/* DELETE AFTER TESTING */}
        <div>
          {renderHighlightData()}
        </div>
        {/* END DELETE */}
        </DefaultLayout>
    );
}

export default Home;
