import "../styles/contact.less"
import React from "react"
export default class Contact extends React.Component {
    render(){
        return (
            <div className="contact-section" id="contact">
                <div className="contact-wapper">
                    <h3>CONTACT</h3>
                    <h2>Let us know how we can help</h2>
                    <div className="bottom-part">
                        <ul  className="contact-part">
                            <li><img src="/email.png"/><a href="mailto:jianglai3303@gmail.com">jianglai3303@gmail.com</a></li>
                            <li><img src="/location.png"/><a href="tel:+16473239298">(+1) 647 323 9298</a></li>
                        </ul>
                        <div className="describe-part">
                            <p>We are .l.....</p>
                            <p>Do not hesitate to contact us to discuss your project. We will offer you the most appropriate solution</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
};