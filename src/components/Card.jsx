import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/card.module.css';

function Card(props) {
  const { imgURL, name } = props;

  return (
    <div className={styles.card}>
      <img className={styles.img} src={imgURL} alt="character" />
      <h2 className={styles.h2}>{name}</h2>
    </div>
  );
}

Card.defaultProps = {
  imgURL: '',
  name: '',
};

Card.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string,
};

export default Card;
