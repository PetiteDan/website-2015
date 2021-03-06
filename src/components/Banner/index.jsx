import '!style!css!less!./Banner.less';
import React, { Component } from 'react';
import BannerImage from './banner.jpg';
import Logo from './logo.png';

class Banner extends Component {
  render() {
    return (
      <section id="banner" style={{backgroundImage: `url('${BannerImage}')`}}>
        <img alt='PHPConf Taiwan logo' title='PHPConf Taiwan 2015' src={Logo} />
        <h1>PHPConf Taiwan 2015</h1>
        <div className="mask"></div>
      </section>
    );
  }
}

export default Banner;
