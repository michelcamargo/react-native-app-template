import React, { ReactNode } from 'react';

import Styled, { StyledProps } from './styles';

interface Props extends StyledProps {
  children: ReactNode,
}

const ScreenSession = (props: Props) => {
  return (
    <Styled.SessionWrapper {...props}>
      <Styled.SessionContainer {...props}>
        <Styled.SessionContent>
          {props.children}
        </Styled.SessionContent>
      </Styled.SessionContainer>
    </Styled.SessionWrapper>
  );
};

export default ScreenSession;
