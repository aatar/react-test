import React, { Component, Fragment } from 'react';

import Footer from '../../../shared/components/Footer';
import Navbar from '../../../shared/components/Navbar';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
