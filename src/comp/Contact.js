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
                            <li><img src="/email.png"/><a href="mailto:maintcanada@gmail.com">maintcanada@gmail.com</a></li>
                            <li><img src="/location.png"/><a href="tel:+16478610121">(+1) 647-861-0121</a></li>
                        </ul>
                        <div className="describe-part">
                            <p>We are a team of experts that works on striking projects with passion.</p>
                            <p>Do not hesitate to contact us to discuss your project. We will offer you the most appropriate solution</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
};