import React from 'react';
import { Element } from 'react-scroll';

const HomeYellowBar = () => {
    return (
        <Element className='homeYellowBar'>
            <div className='yellowBarStat'>
                <div className='yellowBarStatNumber packegesReceived'>
                    10
                </div>
                <div className='yellowBarStatTitle'>
                    oddanych worków
                </div>
                <div className='yellowBarStatDiscription'>
                    Lorem ipsum dolor sit amet, consectetur adipisc <br /> Pellentesque vel enim a elit viverra elementuma. <br /> Aliquam erat volutpat.
                </div>
            </div>
            <div className='yellowBarStat'>
                <div className='yellowBarStatNumber packegesReceived'>
                    5
                </div>
                <div className='yellowBarStatTitle'>
                    wspartych organizacji
                </div>
                <div className='yellowBarStatDiscription'>
                    Lorem ipsum dolor sit amet, consectetur adipisc <br /> Pellentesque vel enim a elit viverra elementuma. <br /> Aliquam erat volutpat.
                </div>
            </div>
            <div className='yellowBarStat'>
                <div className='yellowBarStatNumber packegesReceived'>
                    7
                </div>
                <div className='yellowBarStatTitle'>
                    zorganizowanych zbiórek
                </div>
                <div className='yellowBarStatDiscription'>
                    Lorem ipsum dolor sit amet, consectetur adipisc <br /> Pellentesque vel enim a elit viverra elementuma. <br /> Aliquam erat volutpat.
                </div>
            </div>
        </Element>
    )
}

export default HomeYellowBar;