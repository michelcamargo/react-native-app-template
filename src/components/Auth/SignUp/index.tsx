import React from 'react';
import {Box, Button, ButtonText, Text} from "@gluestack-ui/themed";
import {AuthStepsEnum} from "../../../lib/auth";

interface Props {
  stepHandler: (step: AuthStepsEnum) => void
}

const AuthSignUpStep = ({stepHandler}: Props) => {
  return (
    <Box>
      <Text>REGISTRO</Text>
      <Button onPress={() => stepHandler(AuthStepsEnum.SIGNIN)}>
        <ButtonText>
          <Text>Entrar</Text>
        </ButtonText>
      </Button>
    </Box>
  );
};

export default AuthSignUpStep;
