import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media (max-width: 345px) {
    max-width: 275px;
  }
`;

export const ThumbnailDefault = styled.img`
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
`;

export const VideoTitle = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledButton = styled.button`
  width: 120px;
  font-size: 14px;
  padding: 8px;
  background-color: #2f2f2f;
  text-transform: uppercase;
`;