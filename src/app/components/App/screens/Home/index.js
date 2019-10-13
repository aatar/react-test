import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../../../../resources/images/logo.png';
import home from '../../../../resources/images/home.png';
import { ROUTES } from '../../routes';
import Footer from '../../../shared/components/Footer';
import { actionCreators as albumPhotosActions } from '../../../../redux/albumPhotos/actions';

import styles from './styles.scss';
import { STRINGS } from './strings';
import { MAX_AMOUNT } from './constants';

const styless = {
  spanHello: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ccc'
  }
};

class Home extends Component {
  componentDidMount() {
    this.props.getPhotos(2);
    /* fetch('https://ma-express-v2.herokuapp.com/albums/2/photos')
      .then(response => response.json())
      .then(response => this.setState({ data: response })); */
  }

  render() {
    const { albumPhotos } = this.props;
    return (
      <Fragment>
        <div className={styles.mainSection}>
          <img src={home} alt="" className={styles.homeImage} />
          <div className={styles.content}>
            <img src={logo} alt="" className={styles.logo} />
            <span className={styles.title}>{STRINGS.TITLE}</span>
            <div className={styles.buttons}>
              <Link to={ROUTES.PROPERTIES}>{STRINGS.SEARCH_PROPERTIES}</Link>
              <Link to={ROUTES.VALUATOR}>{STRINGS.VALUATOR}</Link>
            </div>
            {albumPhotos &&
              albumPhotos.map(
                (item, index) =>
                  index < MAX_AMOUNT && (
                    <span key={item.id} style={styless.spanHello}>
                      {item.title}
                    </span>
                  )
              )}
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

Home.propTypes = {
  getPhotos: PropTypes.func,
  albumPhotos: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string
    })
  )
};

const mapStateToProps = store => ({
  albumPhotos: store.albumPhotos.albumPhotos
});

const mapDispatchToProps = dispatch => ({
  getPhotos: albumId => dispatch(albumPhotosActions.getPhotos(albumId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
