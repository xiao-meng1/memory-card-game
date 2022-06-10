import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/card.module.css';

function Card(props) {
  const { imgURL, name, clickEvent } = props;

  return (
    <button
      type="button"
      data-name={name}
      className={styles.card}
      onClick={clickEvent}
    >
      <img
        className={styles.img}
        draggable="false"
        src={imgURL}
        alt="character"
      />
      <h2 className={styles.h2} draggable="false">
        {name}
      </h2>
    </button>
  );
}

Card.defaultProps = {
  imgURL: '',
  name: '',
  clickEvent: () => {},
};

Card.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string,
  clickEvent: PropTypes.func,
};

export default Card;
