import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Logo from '../Logo/Logo'
import "./UserDetails.css"


function UserDetails() {
    const [item, setItem] = useState([])


    const getData = async () => {
        const { data } = await axios.get('http://192.168.29.199:4001/fetch');
        console.log(data)
        setItem(data)
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="UserNamePage">
            <Logo></Logo>
            <p className="MemberCount">
                Number of Members: {item.length}
            </p>
            <div className="MemberList">
                {
                    item.map(data => {
                        return (
                            <div className="MemberCard">
                                <div className="primaryDetails">
                                    <p className="name">{data.name}</p>
                                    <p className="telnumber">{data.phone}</p>
                                </div>
                                <div className="secondaryDetails">
                                    <p className="email">{data.email}</p>
                                    <p className="donate">donated={data.amount}/-</p>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default UserDetails