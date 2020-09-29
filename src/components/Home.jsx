import React from 'react';
import HomeAboutUs from './HomeAboutUs';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';
import HomeFourSteps from './HomeFourSteps';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeYellowBar from './HomeYellowBar';

const Home = () => {
    return (
        <>
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