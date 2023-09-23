import React from 'react';

import { Text, Button, ButtonText } from "@gluestack-ui/themed";

import { AuthStepsEnum } from "../../../lib/auth";
import ActionButton from "../../ActionButton";
import { anchorNavigate } from "../../Navigation";
import Styled from '../styles';
import HeroLogo from "../../HeroLogo";
import ScreenSession from "../../ScreenSession";

interface Props {
  stepHandler: (step: AuthStepsEnum) => void
}

const AuthSignInStep = ({ stepHandler }: Props) => {
  return (
    <Styled.AuthContainer>
      <ScreenSession>
        <HeroLogo />
      </ScreenSession>
      <ScreenSession>
        <Styled.AuthMainOptionLabel>ENTRE</Styled.AuthMainOptionLabel>
        <ActionButton onPress={() => anchorNavigate('main')} outlined>
          Entrar
        </ActionButton>
      </ScreenSession>
      <ScreenSession>
        <Text>ou registre-se</Text>
        <ActionButton onPress={() => stepHandler(AuthStepsEnum.SIGNUP)}>
          Criar conta
        </ActionButton>
      </ScreenSession>
    </Styled.AuthContainer>
  );
};

export default AuthSignInStep;
