import styled, { css } from 'styled-components';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import VisibilityIcon from '@material-ui/icons/Visibility';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 80%;

  @media (min-width: 980px) {
    max-width: 700px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;

  > p {
    font-size: 20px;
  }
`;

export const BackButton = styled.a`
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin-right: 30px;
  cursor: pointer;
`;

export const BackIcon = styled(ArrowBackIosIcon)`
  color: #fff;
  margin-left: 7px;
  flex-shrink: 0;
`;

export const ThumbnailDefault = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

export const ChannelInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  overflow: hidden;
  margin-bottom: 30px;
`;

export const LikeDislikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
  }

  > p + p {
    margin-left: 12px;
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  color: #fff;
  margin-right: 7px;
`;

export const LikeIcon = styled(ThumbUpIcon)`
  ${iconCSS}
`;

export const DislikeIcon = styled(ThumbDownIcon)`
  ${iconCSS}
`;

export const ViewWrapper = styled.div`
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const ViewIcon = styled(VisibilityIcon)`
  ${iconCSS}
`;

export const ErrorWrapper = styled.div`
  margin-top: 30px;
`;