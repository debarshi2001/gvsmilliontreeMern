import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import './Membership.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Membership() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState()
  const [amount, setAmount] = useState()


  async function submitData(e) {
    
    e.preventDefault();
    try {
      await axios.post("http://154.41.253.161:4001/post", {
        name, email, phone, amount
      }).then((response) => {
        toast.success(response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setName("")
        setEmail("")
        setPhone("")
        setAmount("")
      })
    }
    catch (error) {

    }
  }




  return (
    <div>
      <div className="membership_frame">
        <h2>Membership</h2>
        <h3>Join to our club and be a member of us by donating a small amount.</h3>
        <form className="membership_form" onSubmit={submitData}>
          <input type="text" name="name" id="name" placeholder='Name*' required value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" name="phone" id="phnumber" placeholder='Phone*' required value={phone} onChange={(e) => setPhone(e.target.value)} />

          <div className="donation">
            <h6>Member fees/Donate*</h6>
            <div className="money">

              <button type="button" >100.00</button>
              <button type="button" >250.00</button>
              <button type="button" >500.00</button>
              <button type="button" >Above</button>
            </div>
            <input type="number" name="amount" id="" min="100" value={amount} required onChange={(e) => setAmount(e.target.value)} />

          </div>
          <div className="d-flex justify-content-center">

            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
          <div className="d-flex justify-content-between" id="payment_details" >
            <div className="container ">
              <p className='text-center text-primary'>Scan The QR Code and Complete your Donation</p>
              <img src="./Photos/QR/BandhanBank.jpg" alt="" srcset="" width={200} />
              <p>PhonePayNo = 9733485837</p>
            </div>
            <div className="d-flex flex-column w-100 m-1">
              <p className='text-center text-primary'>Bank Details</p>
              <p>Acc No:10230008671452</p>
              <p>IFS Code:BDBL0001051</p>
              <p>Branch: Basirhat</p>
              <p>Name:Gramin Vikash Society</p>

            </div>
          </div>
          <button type="submit" className='w-50 align-self-center border rounded border-2 border-warning p-2 fs-5' >Register</button>
        </form>


      </div>
      <Footer />
    </div>
  );
}
