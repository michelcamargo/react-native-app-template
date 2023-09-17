import React from 'react';

import { Text, Button, ButtonText } from "@gluestack-ui/themed";
import Styled from '../styles';

import { AuthStepsEnum } from "../../../lib/auth";
import { anchorNavigate } from "../../Navigation";
import ActionButton from "../../ActionButton";

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
        {/*<Button onPress={() => anchorNavigate('main')}>*/}
        {/*  <ButtonText>*/}
        {/*    <Text>Entrar</Text>*/}
        {/*  </ButtonText>*/}
        {/*</Button>*/}
        <ActionButton onPress={() => anchorNavigate('main')}>
          Entrar
        </ActionButton>
      </Styled.AuthActionsContainer>
  
      <Styled.AuthActionsContainer>
        <Text>ou registre-se</Text>
        {/*<Button onPress={() => stepHandler(AuthStepsEnum.SIGNUP)}>*/}
        {/*  <ButtonText >*/}
        {/*    <Text>Criar conta</Text>*/}
        {/*  </ButtonText>*/}
        {/*</Button>*/}
        <ActionButton onPress={() => stepHandler(AuthStepsEnum.SIGNUP)}>
          Criar conta
        </ActionButton>
      </Styled.AuthActionsContainer>
    </Styled.AuthContainer>
  );
};

export default AuthSignInStep;
