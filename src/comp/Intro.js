import "../styles/intro.less"
import React from "react"
export default class Intro extends React.Component {
    render(){
        return (
            <div className="intro-wapper">
                <div className="left-space-banner"></div>
                <div className="inner-wrapper">
                    <div className="intro-frame">
                        <div className="left-part">
                            <h3>WHO ARE WE</h3>
                            <h2>Creative website development & design agency in Toronto</h2>
                            <p>Basée à Nantes, SPARKK est une agence web spécialisée dans la création de sites Internet sur mesure et la réalisation de solutions numériques depuis 2013.</p>
                            <p>Créative et multidisciplinaire, notre équipe de designers et de développeurs vous conseille dans la définition de vos objectifs et vous accompagne à chaque étape de votre projet digital, de son concept à sa réalisation finale, en étant toujours à l’écoute de vos besoins.</p>
                            <p>Puisque nous croyons que le design et l’expérience utilisateur sont bien plus qu’une simple valeur ajoutée, nous mettons un point d’honneur à les intégrer dans le processus et la conception même de nos projets digitaux.</p>
                        </div>
                        <div className="right-sklls">
                            <div className="skills-top-image"></div>
                            <div className="skills-intro">
                                <h3 className="skill-title">SKILLS</h3>
                                <ul className="skill-list">
                                    <li className="skill-item">
                                        <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 245.156L174.349 169.453V205.688L31.3937 265.497L174.349 325.709V362.079L0 286.241V245.156ZM309.221 66H349.103L220.025 446H180.143L309.221 66ZM337.651 323.824L480.606 264.015L337.651 203.802V167.567L512 243.136V284.221L337.651 359.924V323.824Z"></path>
                                        </svg>
                                        <span>Web Development</span>
                                    </li>
                                    <li className="skill-item">
                                        <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 245.156L174.349 169.453V205.688L31.3937 265.497L174.349 325.709V362.079L0 286.241V245.156ZM309.221 66H349.103L220.025 446H180.143L309.221 66ZM337.651 323.824L480.606 264.015L337.651 203.802V167.567L512 243.136V284.221L337.651 359.924V323.824Z"></path>
                                        </svg>
                                        <span>Website Design</span>
                                    </li>
                                    <li className="skill-item">
                                        <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 245.156L174.349 169.453V205.688L31.3937 265.497L174.349 325.709V362.079L0 286.241V245.156ZM309.221 66H349.103L220.025 446H180.143L309.221 66ZM337.651 323.824L480.606 264.015L337.651 203.802V167.567L512 243.136V284.221L337.651 359.924V323.824Z"></path>
                                        </svg>
                                        <span>Branding</span>
                                    </li>
                                    <li className="skill-item">
                                        <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 245.156L174.349 169.453V205.688L31.3937 265.497L174.349 325.709V362.079L0 286.241V245.156ZM309.221 66H349.103L220.025 446H180.143L309.221 66ZM337.651 323.824L480.606 264.015L337.651 203.802V167.567L512 243.136V284.221L337.651 359.924V323.824Z"></path>
                                        </svg>
                                        <span>E-Commerce Solutions</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};