import "../common/main.scss";
import "../common/footer.scss";
import {Logo,Facebook,Insta,Twitter,Youtube,Linkedin,Home,Email,Phone} from "../components/icons";
const Footer = () => {
    return (
        <div>
            {/* <h1 className="footerClass">Footer</h1> */}
            <footer className="footer">
                <div className="main-content">
                    <div className="left box">
                        <h2> <Logo/></h2>
                        <div className="content">
                            <p>TEDx JNEC is independently<br/>
                            organized TED event. Officially<br/>
                            licensed by TED.</p><br/>
                            <div className="social">
                                <a> <span><Facebook/> </span></a>
                                <a> <span><Twitter/> </span> </a>
                                <a><span><Youtube/> </span></a>
                                <a><span><Insta/> </span></a>
                                <a><span><Linkedin/> </span></a>

                            </div>
                        </div>
                    </div>
                    <div className="right box">
                        <h2>CONTACT</h2>
                        <div className="content">
                            <div className="place">
                                <a><span className="icon">< Home/> </span></a>
                                <span className="text">MGM's Jawaharlal Nehru
                                Engineering College, Aurangabad.</span>
                            </div>
                            <div className="email">
                                <a> <span className="icon">< Email/> </span> </a>
                                <span className="text">contact@tedxjnec.com </span>
                            </div>
                            <div className="phone">
                                <a><span className="icon">< Phone/> </span> </a>
                                <span className="text">7218078452   </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foot">
                    <p>Made By WebDevelopment Team : TEDxJNEC 2021</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer

