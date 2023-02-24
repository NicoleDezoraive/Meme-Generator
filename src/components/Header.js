import React from "react"
import appLogo from '../images/app-logo.png'

export default function Header(){
    return(
        <header>
            <nav className="nav">
                <img className="header-logo" src={appLogo}/>
                <h3 className="header-title">MemeGenerator</h3>
                <h4 className="header-react">React Project</h4>
            </nav>
        </header>
    )
}

