import React from 'react';

import { anchorBack } from "../../Navigation";
import Styled from './styles';

interface Props {
  action?: () => void,
}

const BackButton = ({ action }: Props) => {
  return (
    <Styled.BackButtonWrapper onPress={() => action ? action() : anchorBack()}>
      <Styled.BackButtonContainer>
        <Styled.BackButtonLabel>Voltar</Styled.BackButtonLabel>
      </Styled.BackButtonContainer>
    </Styled.BackButtonWrapper>
  );
};

export default BackButton;
