import React from 'react'
import './footer.css';
import Insta from '../Footer/FooterAssest/insta.svg';
import Facebook from '../Footer/FooterAssest/facebook.svg';
import Thread from '../Footer/FooterAssest/thread.svg';
import Youtube from '../Footer/FooterAssest/youtube.svg';
import LinkedIn from '../Footer/FooterAssest/linkedIn.svg';
import { Link } from 'react-router-dom';

const Footer = () => {

    const Icons = [Insta, Facebook, Thread, Youtube, LinkedIn];



    return (
        <>

            <div className='fPage'>
                <div className='subscribe-section '>
                    <h2>SUBSCRIBE TO OUR <br /> NEWSLETTER</h2>
                    <p>Lorem ipsum dolor sit amet. Aut ipsam
                        illum et nostrum quidem aut necesbus
                        enim</p>
                    <input type='email' placeholder='Enter Your Email Address' className='email-input' />
                    <button className='subscribe-button'>SUBSCRIBE</button>
                </div>
                <div className='about-section '>
                    <h2 className='c-fHeading'>ABOUT US</h2>
                    <ul className='aboutus-list allList'>
                        <li>Our Story</li>
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Help & Support</li>
                    </ul>
                </div>
                <div className='ourservice-section '>
                    <h2 className='c-fHeading'>OUR SERVICES</h2>
                    <ul className='ourservice-list allList'>
                        <li>Book Maali</li>
                        <li>Plant Day Care</li>
                        <li>Rent Plants</li>
                        <li>Plants & Pots</li>
                        <li>Gardening Tools</li>
                    </ul>
                </div>
                <div className='usefulllink-section'>
                    <h2 className='c-fHeading'>USEFUL LINKS</h2>
                    <ul className='usefullink-list '>
                        <li>My Account</li>
                        <li>Orders & Returns</li>
                        <li>Track Order</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Return, Refund & Replacement Policy</li>
                    </ul>
                </div>
                <div className='getintouch-section '>
                    <h2 className='c-fHeading'>GET IN TOUCH</h2>
                    <ul className='getintouch-list '>
                        <li>Address: F 262, First Floor, Sushant Lok Phase III, Sector 57, Gurgaon, Haryana, India 122003</li>
                        <li>Call: +919958287272</li>
                        <li>Email: care@chaperoneplants.com</li>
                    </ul>
                </div>
            </div>

            <div className='c-fLast'>

                <h2>CHAPERONE</h2>
                <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum
                    omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est
                    voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>

                <h2>Follow us on</h2>
                <ul className='c-fIcons'>
                    {Icons.map((item, index) => {
                        return (

                            <li key={index}>
                                <Link to={`/social-media-link-${index}`}>
                                    <img src={item} alt={`Social Media ${index}`} />
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
            <hr />
            <p className='c-paraEndLine'>© 2023, chaperone.com All rights reserved.</p>


        </>
    )
}

export default Footer
