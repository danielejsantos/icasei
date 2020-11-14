import React, { useState, useCallback } from 'react';

import { API_KEY } from "../../env";
import { YOUTUBE_API } from '../../services'; 

import VideoCard from '../VideoCard';
import Error from '../Error';

import { Container, InputWrapper, StyledInput, StyledButton, SearchIcon, VideoListWrapper, AnimatedContainer, ButtonsWrapper, PageButtons } from './styles';

import { Video, Videos } from '../../types';

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const [videos, setVideos] = useState<Videos | any>({});
  const [error, setError] = useState<string>('');

  const screenHight = window.screen.height / 2;

  const fetchVideos = useCallback(async (token: string) => {
    if (!search) return;
    console.log(token);

    try {
      const { data }: any = await YOUTUBE_API.get(`/search?part=id,snippet&maxResults=9&order=viewCount&pageToken=${token}&q=${search}&type=video&key=${API_KEY}`);
      setVideos(data);
      setError('');
      setSubmitted(true);
      
    } catch(e) {
      console.log('error', e);
      setError(e);
      setSubmitted(true);
    };
  }, [search]);

  console.log('videos', videos)

  return (
    <Container>
      <AnimatedContainer screenHight={screenHight} isSubmitted={isSubmitted}>
        <InputWrapper>
          <StyledInput onChange={e => setSearch(e.target.value)} placeholder="Search" color="secondary" style={{ color: '#fff' }} />
          <StyledButton onClick={() => fetchVideos('')}>
            <SearchIcon />
          </StyledButton>
        </InputWrapper>
  
        {error && <Error />}
      </AnimatedContainer>

      {!error &&<VideoListWrapper>
        {videos?.items?.map((video: Video) => <VideoCard snippet={video.snippet} key={video.id.videoId} id={video.id} />)}
      </VideoListWrapper>}

      {isSubmitted && !error && (
        <ButtonsWrapper>
          {videos.prevPageToken ? <PageButtons onClick={() => fetchVideos(videos.prevPageToken)}>Previous</PageButtons> : <div />}
          {videos.nextPageToken ? <PageButtons onClick={() => fetchVideos(videos.nextPageToken)}>Next</PageButtons> : <div />}
        </ButtonsWrapper>
      )}
    </Container>
  );
}

export default Home;