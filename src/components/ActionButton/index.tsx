import React from 'react';

import Styled from './styles';

const ActionButton = props => {
  
  const { children } = props;
  
  return (
    <Styled.ButtonWrapper {...props}>
      { typeof children === 'string' ? (
        <Styled.ButtonTextContainer>
          <Styled.ButtonTextContent {...props}>{children}</Styled.ButtonTextContent>
        </Styled.ButtonTextContainer>
      ) : { children } }
    </Styled.ButtonWrapper>
  );
};

export default ActionButton;
