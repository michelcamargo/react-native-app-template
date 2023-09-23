import React from 'react';

import Navigation from "../../../helpers/navigation";
import { AuthStepsEnum } from "../../../lib/auth";
import ActionButton from "../../ActionButton";
import HeroLogo from "../../HeroLogo";
import ScreenSession from "../../ScreenSession";
import Styled from '../styles';

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
        <ActionButton onPress={() => Navigation.go('main')} outlined>
          Entrar
        </ActionButton>
      </ScreenSession>
      <ScreenSession>
        <Styled.AuthOptionLabel>ou registre-se</Styled.AuthOptionLabel>
        <ActionButton onPress={() => stepHandler(AuthStepsEnum.SIGNUP)}>
          Criar conta
        </ActionButton>
      </ScreenSession>
    </Styled.AuthContainer>
  );
};

export default AuthSignInStep;
