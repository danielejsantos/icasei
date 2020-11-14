import React from 'react';

import { NoResultsContainer, SadIcon } from './styles';

const Error: React.FC = () => {
  return (
    <NoResultsContainer>
      <SadIcon style={{ fontSize: '30' }} />
      <p>Oops. Something went wrong.</p>
      <p>Try again.</p>
    </NoResultsContainer>
  );
}

export default Error;