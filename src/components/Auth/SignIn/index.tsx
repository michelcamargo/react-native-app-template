import React from 'react';

import { Text, Button, ButtonText } from "@gluestack-ui/themed";

import { AuthStepsEnum } from "../../../lib/auth";
import ActionButton from "../../ActionButton";
import { anchorNavigate } from "../../Navigation";
import Styled from '../styles';

interface Props {
  stepHandler: (step: AuthStepsEnum) => void
}

const AuthSignInStep = ({ stepHandler }: Props) => {
  return (
    <Styled.AuthContainer>
      <Styled.AuthHeroContainer>
        <Styled.HeroBrandLogo>AIR COMMAND</Styled.HeroBrandLogo>
      </Styled.AuthHeroContainer>
      
      <Styled.AuthActionsContainer>
        <Styled.AuthMainOptionLabel>ENTRE</Styled.AuthMainOptionLabel>
        <ActionButton onPress={() => anchorNavigate('main')} outlined>
          Entrar
        </ActionButton>
      </Styled.AuthActionsContainer>
  
      <Styled.AuthActionsContainer>
        <Text>ou registre-se</Text>
        <ActionButton onPress={() => stepHandler(AuthStepsEnum.SIGNUP)}>
          Criar conta
        </ActionButton>
      </Styled.AuthActionsContainer>
    </Styled.AuthContainer>
  );
};

export default AuthSignInStep;
