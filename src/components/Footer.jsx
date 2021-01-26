import "../common/main.scss";
import {Facebook,Insta} from "../components/icons";
const Footer = () => {
    return (
        <div>
            {/* <h1 className="footerClass">Footer</h1> */}
            <footer>
                <div className="main-content">
                    <div className="left">
                        <h2>TEDx JNEC</h2>
                        <div className="content">
                            <p>TEDxJNEC is independently
                            organized TED event. Officially
                            licensed by TED.</p>
                            <div className="social">
                                <a> <Facebook /></a>
                                <a><Insta/></a>
                                <a><span className=""></span></a>
                                <a><span className=""></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="center box">
                        <h2>CONTACT</h2>
                        <div className="content">
                            <div className="place">
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer

