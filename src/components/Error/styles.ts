import styled from 'styled-components';

import SadFace from '@material-ui/icons/SentimentVeryDissatisfied';

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p + p {
    margin-top: 10px;
  }
`;

export const SadIcon = styled(SadFace)`
  color: #fff;
  background: none;
  margin-bottom: 20px;
  flex-shrink: 0;
`;
