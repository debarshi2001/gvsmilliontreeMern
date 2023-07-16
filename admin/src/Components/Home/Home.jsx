import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import './Home.css'
import { Outlet, Link } from "react-router-dom";



export default function Home() {
    const [authenticated] = useState(localStorage.getItem("auth"));

    if (!authenticated) {
        console.log(authenticated)
        return <Navigate replace to="/login" />;
        // Redirect
    } else {
        return (
            <div>
                <div className=" w-100 d-flex flex-column align-items-center p-0 m-0">
                    <div className="d-flex flex-column align-items-center bg-danger w-100 p-0">
                        <div className="d-flex flex-column align-items-center ">
                            <h2>Gramin Vikash Society</h2>
                            <h3>GVS MILLION TREE CLUB</h3>
                        </div>
                        <div className="fs-5">
                            <li class="list-group">
                                <Link className="list-group-item list-group-item-action" >Members</Link>
                            </li>
                        </div>
                    </div>
                    <div className="" id="body">
                        < Outlet/>
                    </div>

                </div>

            </div>
        );
    }
}
