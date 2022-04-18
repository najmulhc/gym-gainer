import React from 'react';
import Services from './Services';
import Topbanner from './Topbanner';
import WhyMe from './WhyMe';
const Home = () => {
    return (
        <main>
           <Topbanner/>
           <WhyMe/>
           <Services/>
        </main>
    );
};

export default Home;