import React from 'react';

import BackButton from "./BackButton";
import GeneralHeaderInfo from "./GeneralHeaderInfo";
import Styled from './styles';

type HeaderProps = {
  backAction?: () => void,
  hideBackAction?: boolean,
}

const TopContent = ({ backAction, hideBackAction }: HeaderProps) => {
  if (hideBackAction) {
    return (
      <Styled.HeaderTopContent>
        <GeneralHeaderInfo />
      </Styled.HeaderTopContent>
    );
  }
  
  return (
    <Styled.HeaderTopContent>
      <Styled.HeaderTopLeft_Back>
        <BackButton action={backAction} />
      </Styled.HeaderTopLeft_Back>
      <Styled.HeaderTopRight>
        <GeneralHeaderInfo />
      </Styled.HeaderTopRight>
    </Styled.HeaderTopContent>
  );

};

const MidContent = () => {
  return (
    <Styled.HeaderMidContent>
      <Styled.HeaderMidLeft></Styled.HeaderMidLeft>
      <Styled.HeaderMidRight></Styled.HeaderMidRight>
    </Styled.HeaderMidContent>
  );
};

const BottomContent = () => {
  return (
    <Styled.HeaderBottomContent>
      <Styled.HeaderBottomLeft></Styled.HeaderBottomLeft>
      <Styled.HeaderBottomRight></Styled.HeaderBottomRight>
    </Styled.HeaderBottomContent>
  );
};

const HeaderComponent = ({ backAction, hideBackAction }: HeaderProps) => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderContainer>
        <TopContent backAction={backAction} hideBackAction={hideBackAction}/>
        <MidContent />
        <BottomContent />
      </Styled.HeaderContainer>
    </Styled.HeaderWrapper>
  );
};

export default HeaderComponent;
