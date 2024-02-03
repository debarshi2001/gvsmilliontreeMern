import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import UploadPhotos from '../UploadPhotos/UploadPhotos';
import UserDetails from '../UserDetails/UserDetails';
import "../Navbar/Navbar.css"
import Home from '../Home/Home';


function Navbar() {
    return (
        <Router>
            <div>
                <Routes>

                    <Route
                        exact path="/uploadPhotos"
                        element={<UploadPhotos />}
                    ></Route>
                    <Route
                        exact path="/userDetails"
                        element={<UserDetails />}
                    ></Route>
                    <Route
                        exact path="/"
                        element={<Home />}
                    ></Route>
                </Routes>
                <div className="Main_Navbar">
                    <ul>
                        <li id="uploadPhotos" >
                            <Link to="/uploadPhotos">
                                <span className="material-symbols-outlined">
                                    add_photo_alternate
                                </span>
                            </Link>
                        </li>
                        <li id='userDetails' >
                            <Link to="/userDetails" >
                                <span className="material-symbols-outlined">
                                    groups
                                </span>
                            </Link>
                        </li>
                        <li id='home' >
                            <Link to="/" >
                                <span className="material-symbols-outlined">
                                    home
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </Router>

    )


}

export default Navbar