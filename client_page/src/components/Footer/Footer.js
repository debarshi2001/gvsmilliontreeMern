import React from 'react';
import './Footer.css'


export default function Footer() {


    return (
        <div>
            <div className="footer">
                <div className="address">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d136.01045794517762!2d88.84825585039953!3d22.673233575503847!2m2!1f322.33570846651486!2f45!3m2!1i1024!2i768!4f35!5e1!3m2!1sen!2sin!4v1692890055710!5m2!1sen!2sin" width="250" height="200"  ></iframe>
                    <span className='m-2'>
                        <a href="https://www.google.com/maps/@22.6742018,88.8474459,3a,60y,330.94h,90t/data=!3m6!1e1!3m4!1syp50po_paVpXntSlGEArpg!2e0!7i13312!8i6656?entry=ttu" target="_blank" className='d-flex flex-column align-items-center text-center'>
                            <i class="fa-solid fa-house"></i><br />
                            Gramin Vikash Society,Mirzapur,<br />P.O-Basirhat College,P.S.-Basirhat,<br />24 pgs(N),pin-743412,West Bengal,India
                        </a>
                    </span>
                    <span className='m-2'>
                        <a href="tel:+918597775837">
                            <i class="fa-solid fa-phone"></i>
                            +91 8597775837
                        </a>
                    </span>
                    <span className='m-2'>
                        <a href="https://www.facebook.com/profile.php?id=100094056671220&mibextid=ZbWKwL" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                            Facebook
                        </a>
                    </span>
                    <span className='m-2'>
                        <a href="https://www.youtube.com/channel/UCMEnUPP4PyRESVXUslWEvWA" target="_blank">
                            <i class="fa-brands fa-youtube"></i>
                            Youtube
                        </a>


                    </span>
                    <span className='m-2'>
                        <a href="mailto: graminvikashsociety@gmail.com?subject = Feedback&body = Message" target="_blank">
                            <i class="fa-brands fa-email"></i>
                            Mail
                        </a>


                    </span>
                </div>
                <div className="company_logo">
                    <div className="image">
                        <img src="./Photos/Logo1.png" alt="" />
                    </div>
                    <div className="image">
                        <img src="./Photos/Profile.png" alt="" />
                    </div>
                </div>

            </div>
            <div className="copyrights">
                <span className=''>Copywirte <i class="fa fa-copyright" aria-hidden="true"></i> 2023 All rights Reserved by GVS Million Tree Club</span>
                <span>Made with <i class="fa-solid fa-heart text-danger"></i> By Debarshi Halder
                </span>
            </div>
        </div>
    );
}
