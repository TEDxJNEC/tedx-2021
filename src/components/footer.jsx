import React from 'react'
import "./common/colors.scss";
import "./common/main.scss";

const footer = () => {
    return (
        <div className="main-footer">
            <div className="container-fluid" style="background-color:$BACKGROUND">
                <div className="row">
                    <div className="col">
                        <h1><b>TEDx JNEC</b></h1>
                        <ul className="list-unstyled">
                            <li>TEDxJNEC is independently
                            organized TED event. Officially
                            licensed by TED.</li>
                            <li>
                            
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>CONTACT</h1>
                        <ul className="list-unstyled">
                            <li>MGM's Jawaharlal Nehru
                            Engineering College, Aurangabad.</li>
                            <li>contact@tedxjnec.com </li>
                            <li>7218078452</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <p>
                            Made By WebDevelopment Team : TEDxJNEC 2021
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default footer
