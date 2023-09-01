import React from 'react';

import { Box, Text, Button, ButtonText } from "@gluestack-ui/themed";

import { AuthStepsEnum } from "../../../lib/auth";
import { anchorNavigate } from "../../Navigation";

interface Props {
  stepHandler: (step: AuthStepsEnum) => void
}

const AuthSignInStep = ({ stepHandler }: Props) => {
  return (
    <Box>
      <Text>LOGIN</Text>
      <Button onPress={() => stepHandler(AuthStepsEnum.SIGNUP)}>
        <ButtonText>
          <Text>Registrar-se</Text>
        </ButtonText>
      </Button>
      <Button onPress={() => anchorNavigate('main')}>
        <ButtonText>
          <Text>Entrar</Text>
        </ButtonText>
      </Button>
    </Box>
  );
};

export default AuthSignInStep;
