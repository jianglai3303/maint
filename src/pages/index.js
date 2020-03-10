import React from "react"
import "../styles/font.css"
import "../styles/index.less"
import Header from '../comp/Header';
import Banner from '../comp/Banner';
import Intro from '../comp/Intro';
import Discover from '../comp/Discover';
import Contact from '../comp/Contact';

export default () => <div>
    <Header></Header>
    <Banner></Banner>
    <Intro></Intro>
    <Discover></Discover>
    <Contact></Contact>
</div>
