import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../../env';
import { YOUTUBE_API } from '../../services';

import { 
  Container, 
  Wrapper, 
  TopContainer, 
  BackButton, 
  BackIcon, 
  ThumbnailDefault, 
  ChannelInfo, 
  Description,
  LikeDislikeWrapper, 
  LikeIcon, 
  DislikeIcon,
  ViewWrapper,
  ViewIcon,
  ErrorWrapper,
 } from './styles';

import Error from '../Error';

import { VideoDetails } from '../../types'; 

const Details: React.FC = () => {
  const [videoDetails, setVideoDetails] = useState<VideoDetails | any>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();

  const fetchVideoDetails = useCallback(async () => {
    try {
      const {data}: any = await YOUTUBE_API.get(`/videos?id=${id}&part=snippet,statistics&key=${API_KEY}`);
      setVideoDetails(data.items[0]);
      setError(null);
      setLoading(false);
    } catch(e) {
      setError(e);
      setLoading(false);
    }
  },[id]);

  useEffect(() => {
    fetchVideoDetails()
  }, [fetchVideoDetails]);

  if (loading) return <div />

  if (error) return (
    <ErrorWrapper>
      <Error />
    </ErrorWrapper>
  );

  return (
    <Container>
      <Wrapper>
        <TopContainer>
          <BackButton href="/">
            <BackIcon />
          </BackButton>
          <p>{videoDetails.snippet.title}</p>
        </TopContainer>
        <ThumbnailDefault src={videoDetails.snippet.thumbnails.high.url} />
        <ChannelInfo>
          <p><b>{videoDetails.snippet.channelTitle}</b></p>
          <LikeDislikeWrapper>
            <p><LikeIcon style={{ fontSize: 'medium' }} /><b>{Number(videoDetails.statistics.likeCount).toLocaleString('pt-BR')}</b></p>
            <p><DislikeIcon style={{ fontSize: 'medium' }} /><b>{Number(videoDetails.statistics.dislikeCount).toLocaleString('pt-BR')}</b></p>
          </LikeDislikeWrapper>
        </ChannelInfo>
        <ViewWrapper>
          <ViewIcon />
          <p><b>{Number(videoDetails.statistics.viewCount).toLocaleString('pt-BR')}</b></p>
        </ViewWrapper>
        <Description>{videoDetails.snippet.description}</Description>
      </Wrapper>
    </Container>
  );
}

export default Details;