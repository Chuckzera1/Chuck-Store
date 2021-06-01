import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Alert({ type, message, show }) {
  return (
    <>
      <Container>
        <div className={`alert-box ${type} ${show ? 'fade-in' : 'fade-out'}`}>
          <span>{`${type.toUpperCase()}:  `} </span>
          {message}.
        </div>
      </Container>
    </>
  );
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Alert;
