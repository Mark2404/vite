import React from 'react'
import "./index.scss";

function index() {
    return (
        <footer className="footer container">
            <div className="footer-container">
                <div className="footer-section">
                    <img src="./assets/logo.svg" alt="" />
                    <p>Terms • Privacy Policy</p>
                </div>
                <div className="footer-section">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="#">Web Studio</a></li>
                        <li><a href="#">DynamicBox Flex</a></li>
                        <li><a href="#">Programming Forms</a></li>
                        <li><a href="#">Integrations</a></li>
                        <li><a href="#">Command-Line</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Tutorials & Guides</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Support Center</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Company values</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Subscribe</h3>
                    <p>Get the latest news and articles to your inbox every month.</p>
                    <div className="subscribe-box">
                        <input type="email" placeholder="Your email" />
                        <button>&rarr;</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}







export default index