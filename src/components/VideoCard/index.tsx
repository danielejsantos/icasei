import React from 'react';

import { Link } from 'react-router-dom';

import { Container, ThumbnailDefault, VideoTitle, StyledText, StyledButton } from './styles';

import { VideoCardProps } from '../../types';

const VideoCard: React.FC<VideoCardProps> = ({ snippet, id }) => {
  return (
    <Container>
      <ThumbnailDefault src={snippet.thumbnails.medium.url} />
      <VideoTitle>{snippet.title}</VideoTitle>
      <StyledText><b>{snippet.channelTitle}</b></StyledText>
      <StyledText>{snippet.description}</StyledText>
      <Link to={id.videoId}>
        <StyledButton>Video details</StyledButton>
      </Link>
    </Container>
  );
}

export default VideoCard;