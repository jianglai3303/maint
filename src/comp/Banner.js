import "../styles/banner.less"
import { easeInOutBack } from 'js-easing-functions';
import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialAnimTrigger: true,
            isPlaying: true,
            textPos: [{
                origX: -40,
                x: -40,
                y: 115,
            }, {
                origX: -20,
                x: -20,
                y: 115,
            }, {
                origX: 10,
                x: 10,
                y: 115,
            }],
            textPosMob: [{
                x: 0,
                y: 110,
            }, {
                x: 10,
                y: 110,
            }, {
                x: 20,
                y: 110,
            }]
        };
    }    
    startTime = null;
    tick(ind) {
        const elapsed = Date.now() - this.startTime;
        const duration = 2000;
        const startPosition = 0;
        const endPosition = 20;
        const val = easeInOutBack(elapsed, startPosition, endPosition, duration);
        const temp = this.state.textPos;
        temp[ind].x = val + temp[ind].origX;
        this.setState({
            textPos: temp
        });
        if (elapsed < duration){
            requestAnimationFrame(function(){
                this.tick(ind);
            }.bind(this));
        }
    }
    animate(index){
        if(window.innerWidth < 1000){
            return;
        }
        this.startTime = Date.now();
        this.tick(index);
    }
    updateDimensions(){
        if(window.innerWidth < 1000){
            return;
        }
    }
    componentDidMount(){
        const self = this;
        this.animate(0);
        setTimeout(function(){
            self.setState({
                initialAnimTrigger: false
            })
        }, 1000);
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    render() {
        let heightResponsive;
        if( window.innerWidth > 1000){
            heightResponsive = 50
        } else if( window.innerWidth > 768) {
            heightResponsive = 60
        } else {
            heightResponsive = 100;
        }
        let pos;
        if(window.innerWidth > 1000){
            pos = this.state.textPos;
        } else {
            pos = this.state.textPosMob;
        }
        return (
            <div className="banner-wapper">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={heightResponsive}
                    totalSlides={3}
                    isPlaying={this.state.isPlaying}
                    interval={5000}
                >
                    <Slider>
                        <Slide index={0} className={this.state.initialAnimTrigger? 'carousel__slide--hidden': ''}>
                            <div className="banner-slide banner-slide-1">
                                <div className="text-mask-part">
                                    <div className="text-mask-part-left">
                                        <div className="background-image">
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" preserveAspectRatio="xMidYMid slice">
                                            <defs>
                                            <mask id="mask1" x="0" y="0" width="100%" height="100%" >
                                            <rect x="0" y="0" width="100%" height="100%" />
                                            <text x={pos[0].x}  y={pos[0].y}>D</text>
                                            </mask>
                                        </defs>
                                        <rect x="0" y="0" width="100%" height="100%" />
                                        </svg>
                                    </div>
                                    
                                    <div className="text-mask-part-margin">
                                    
                                    </div>
                                </div>
                                <div className="intro-part">
                                    <h2 className="intro-title"><span className="short-line"></span><span className="title">MAINT</span></h2>
                                    <h3 className="intro-des">Remarkable Website Design & Development</h3>
                                    <div className="call2action">
                                        <a className="btn-part" href="#contact">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="banner-slide banner-slide-2">
                                <div className="text-mask-part">
                                    <div className="text-mask-part-left">
                                        <div className="background-image">
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" preserveAspectRatio="xMidYMid slice">
                                            <defs>
                                            <mask id="mask2" x="0" y="0" width="100%" height="100%" >
                                            <rect x="0" y="0" width="100%" height="100%" />
                                            <text x={pos[1].x}  y={pos[1].y}>B</text>
                                            </mask>
                                        </defs>
                                        <rect x="0" y="0" width="100%" height="100%" />
                                        </svg>
                                    </div>
                                    
                                    <div className="text-mask-part-margin">
                                    
                                    </div>
                                </div>
                                <div className="intro-part">
                                    <h2 className="intro-title"><span className="short-line"></span><span className="title">MAINT</span></h2>
                                    <h3 className="intro-des">Brand Identity Which Attracts Target Customers</h3>
                                    <div className="call2action">
                                        <a className="btn-part" href="#contact">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="banner-slide banner-slide-3">
                                <div className="text-mask-part">
                                    <div className="text-mask-part-left">
                                        <div className="background-image">
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" preserveAspectRatio="xMidYMid slice">
                                            <defs>
                                            <mask id="mask3" x="0" y="0" width="100%" height="100%" >
                                            <rect x="0" y="0" width="100%" height="100%" />
                                            <text x={pos[2].x}  y={pos[2].y}>E</text>
                                            </mask>
                                        </defs>
                                        <rect x="0" y="0" width="100%" height="100%" />
                                        </svg>
                                    </div>
                                    
                                    <div className="text-mask-part-margin">
                                    
                                    </div>
                                </div>
                                <div className="intro-part">
                                    <h2 className="intro-title"><span className="short-line"></span><span className="title">MAINT</span></h2>
                                    <h3 className="intro-des">E-Commerce Websites To Boost Sales</h3>
                                    <div className="call2action">
                                        <a className="btn-part" href="#contact">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                    <DotGroup className="dot-wapper"/>
                </CarouselProvider>

            </div>
        );
    }
};