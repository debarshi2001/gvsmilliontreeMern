import React from 'react'
import Logo from '../Logo/Logo.jsx'
import '../Home/Home.css'
function Home() {
    return (
        <div className="HomePanel">
            <Logo />
            <div className="message">
                this is the homepage,<br/>
                it is now under develeopment,<br/>
                you can visit other pages:-<br/>
                <h3>Photo Uploading and User Details</h3>
            </div>
        </div>
    )
}

export default Home