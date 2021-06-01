import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

function TitleHeader({ title }) {
  return (
    <>
      <Container>
        <div className="navigation-bar">
          <span className="title">{title}</span>
        </div>
      </Container>
    </>
  );
}

TitleHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleHeader;
