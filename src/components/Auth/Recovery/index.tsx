import React from 'react';
import {Box, Button, ButtonText, Text} from "@gluestack-ui/themed";
import {AuthStepsEnum} from "../../../lib/auth";

interface Props {
  stepHandler: (step: AuthStepsEnum) => void
}

const AuthRecoveryStep = ({stepHandler}: Props) => {
  return (
    <Box>
      <Text>
        RECUPERAÇÃO
      </Text>
      <Button onPress={() => stepHandler(AuthStepsEnum.VALIDATION)}>
        <ButtonText>
          <Text>Enviar email</Text>
        </ButtonText>
      </Button>
    </Box>
  );
};

export default AuthRecoveryStep;
