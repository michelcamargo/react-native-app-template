import React, { ReactNode } from 'react';

import Styled, { StyledProps } from './styles';

interface Props extends StyledProps {
  children: ReactNode,
  onPress?: () => void,
}

const ActionButton = (props: Props) => {
  
  const { children } = props;
  
  return (
    <Styled.ButtonWrapper {...props}>
      { typeof children === 'string' ? (
        <Styled.ButtonTextContainer {...props}>
          <Styled.ButtonTextContent {...props}>{children}</Styled.ButtonTextContent>
        </Styled.ButtonTextContainer>
      ) : { children } }
    </Styled.ButtonWrapper>
  );
};

export default ActionButton;
