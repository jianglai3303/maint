import "../styles/banner.less"
import { easeInOutBack } from 'js-easing-functions';
import React from "react";

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerTextMove: -20
        };
    }    
    startTime = null;
    tick() {
        const elapsed = Date.now() - this.startTime;
        const duration = 2000;
        const startPosition = 0;
        const endPosition = 20;
        const val = easeInOutBack(elapsed, startPosition, endPosition, duration);
        this.setState({
            bannerTextMove: val - 50
        });
        if (elapsed < duration){
            requestAnimationFrame(this.tick.bind(this));
        }
    }
    animate(){
        this.startTime = Date.now();
        this.tick();
    }
    componentDidMount(){
        this.animate();
    }
    render() {
        return (
            <div className="banner-wapper">
                <div className="banner-slide">
                    
                    <div className="text-mask-part">
                        <div className="text-mask-part-left">
                            <div className="background-image">
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" preserveAspectRatio="xMidYMid slice">
                                <defs>
                                <mask id="mask" x="0" y="0" width="100%" height="100%" >
                                <rect x="0" y="0" width="100%" height="100%" />
                                <text x={this.state.bannerTextMove}  y="115">M</text>
                                </mask>
                            </defs>
                            <rect x="0" y="0" width="100%" height="100%" />
                            </svg>
                        </div>
                        
                        <div className="text-mask-part-margin">
                        
                        </div>
                    </div>
                    <div className="intro-part">
                        <h2 className="intro-title"><span className="short-line"></span><span className="title">MAIN</span></h2>
                        <h3 className="intro-des">Festival international des Séries de Cannes</h3>
                        <div className="call2action">
                            <a className="btn-part">Qui sommes nous</a>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
};