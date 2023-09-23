import React from 'react';

import Navigation from "../../../helpers/navigation";
import Styled from './styles';

interface Props {
  action?: () => void,
}

const BackButton = ({ action }: Props) => {
  return (
    <Styled.BackButtonWrapper onPress={() => action ? action() : Navigation.back()}>
      <Styled.BackButtonContainer>
        <Styled.BackButtonLabel>Voltar</Styled.BackButtonLabel>
      </Styled.BackButtonContainer>
    </Styled.BackButtonWrapper>
  );
};

export default BackButton;
