import React from 'react';
import {Box, Button, ButtonText, Text} from "@gluestack-ui/themed";
import {AuthStepsEnum} from "../../../lib/auth";

interface Props {
  stepHandler: (step: AuthStepsEnum) => void
}

const AuthValidationStep = ({stepHandler}: Props) => {
  return (
    <Box>
      <Text>VALIDAÇÃO</Text>
      <Button onPress={() => stepHandler(AuthStepsEnum.SIGNIN)}>
        <ButtonText>
          <Text>Entrar</Text>
        </ButtonText>
      </Button>
    </Box>
  );
};

export default AuthValidationStep;
