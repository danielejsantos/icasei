import styled from 'styled-components';

import Input from '@material-ui/core/Input';
import Search from '@material-ui/icons/Search';

interface InputWrapperProps {
  isSubmitted: boolean;
  screenHight: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimatedContainer = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  top: ${props => props.isSubmitted ? '30' : props.screenHight}px;
  animation-name: ${props => props.isSubmitted ? 'slideUp' : 'none'};
  animation-duration: 1s;
  margin-bottom: 50px;

  @keyframes slideUp {
    from {top: ${props => props.screenHight}px}
    to {top: 30px}
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 300px;

  @media (max-width: 345px) {
    width: 275px;
  }

  @media (min-width: 600px) {
    width: 400px;
  }

  @media (min-width: 780px) {
    width: 560px;
  }
`;

export const StyledInput = styled(Input)`
  background-color: #212121;
  padding: 3px 8px;
  width: 100%;
`;

export const StyledButton = styled.button`
  position: absolute;
  outline: 0;
  background: none;
  cursor: pointer;
  right: 8px;
`;

export const SearchIcon = styled(Search)`
  color: #fff;
  background: none;
  flex-shrink: 0;
`;

export const VideoListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    column-gap: 50px;
  }

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    column-gap: 50px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;

  @media (max-width: 345px) {
    width: 275px;
  }

  @media (min-width: 760px) {
    width: 650px;
  }

  @media (min-width: 1100px) {
    width: 1000px;
  }
`;

export const PageButtons = styled.button`
  border: white 1px solid;
  margin-right: 20px;
  cursor: pointer;
  padding: 10px 20px;
  margin-bottom: 50px;
`;