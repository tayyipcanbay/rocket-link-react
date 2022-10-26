import React from "react";
import "../style/footer.css";

function Footer(){
    return (
        <footer>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h1 className="logo-text">ROCKET LINK</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, quae.
                        </p>
                        <div className="contact">
                            <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
                            <span><i className="fas fa-envelope"></i> &nbsp;
                                mail@rocketlink.com
                            </span>
                        </div>
                        <div className="socials">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <br />
                        <ul>
                            <a href="#">
                                <li>Events</li>
                            </a>
                            <a href="#">
                                <li>Team</li>
                            </a>
                            <a href="#">
                                <li>Mentors</li>
                            </a>
                            <a href="#">
                                <li>Gallery</li>
                            </a>
                            <a href="#">
                                <li>Terms and Conditions</li>
                            </a>
                        </ul>
                    </div>
                    <div className="footer-section contact-form">
                        <h2>Contact Us</h2>
                        <br />
                        <form action="index.html" method="post">
                            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
                            <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
                            <button type="submit" className="btn btn-big contact-btn">
                                <i className="fas fa-envelope"></i>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; rocketlink.com | Designed by Rocket Link
                </div>
            </div>
        </footer>
    );
}
export default Footer;