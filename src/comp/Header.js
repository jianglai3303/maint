import "../styles/header.less"
import React from "react"
export default class Header extends React.Component {
    render(){
        return (
            <div className="header-wapper">
                <img src="/maint.png" className="logo" alt="logo"></img>
                <ul><li><a href="#services">services</a></li><li><a href="#contact">contact us</a></li></ul>
            </div>
        )
    }
};