import "../common/main.scss";
import "../common/footer.scss";
import { Logo, Facebook, Insta, Twitter, Youtube, Linkedin, Home, Email, Phone } from "../components/icons";
const Footer = () => {
    return (
        <div className="head">
            {/* <h1 className="footerClass">Footer</h1> */}
            <footer>
                <div className="container">
                    <div class="sec aboutus">
                        <h1><Logo/></h1><br/>
                        <p>TEDx JNEC is independently
                            organized TED event. Officially<br /> licensed
                            by TED.
                        </p>
                        <ul class="sci">
                            <li><a href="https://www.facebook.com/TEDx-JNEC-102123505190447/"><Facebook/></a></li>
                            <li><a href=" https://twitter.com/tedxjnec?s=09"><Twitter/></a></li>
                            <li><a href="https://www.youtube.com/channel/UCsT0YIqwnpJCM-mx7-gSA4Q"><Youtube/></a></li>
                            <li><a href="https://instagram.com/tedx_jnec?igshid=99m3ao9ndgdf" ><Insta/></a></li>
                            <li><a href="https://www.linkedin.com/company/tedx-jnec"><Linkedin/></a></li>
                        </ul>
                    </div>
                    <div class="sec quickLinks">
                        <h2>Quick Links</h2><br/>
                        <ul>
                            <li><a>About</a></li>
                            <li><a >Team</a></li>
                            <li><a >Highlights</a></li>
                            <li><a >Registrations</a></li>
                        </ul>
                    </div>
                    <div class="sec contact">
                        <h2>Contact Info</h2><br/>
                        <ul class="info">
                            <li>
                                <span><Home/></span>
                                <span>
                                    MGM's Jawaharlal Nehru
                                    Engineering College, Aurangabad.
                                </span>
                            </li>
                            <li>
                                <span><Email/></span>
                                <p><a target="_blank" rel="noreferrer" href="mailto:contact@tedxjnec.com ">contact@tedxjnec.com </a></p>
                            </li>
                            <li>
                                <span><Phone/></span>
                                <p><a target="_blank" rel="noreferrer" href="tel:7218078452">7218078452</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div class="text">
                <p>Made By WebDevelopment Team : TEDxJNEC 2021</p>
            </div>
        </div>
    )
}

export default Footer

