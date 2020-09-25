import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeYellowBar from './HomeYellowBar';
import HomeFourSteps from './HomeFourSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';



const Home = () => {
    return (<>
          <HomeHeader/>
          <HomeMain/>
          <HomeYellowBar/>
          <HomeFourSteps/>
          <HomeAboutUs/>
          <HomeWhoWeHelp/>
          <HomeContact/>
          <HomeFooter/>
        </>
    )
}


export default Home; 