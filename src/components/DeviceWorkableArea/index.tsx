import React, { ReactNode } from 'react';

import { Keyboard, TouchableWithoutFeedback } from "react-native";

import Styled from './styles';

interface Props {
  children?: ReactNode,
  keyboardDismiss?: boolean,
}

const DeviceWorkableArea = ({ children, keyboardDismiss }: Props) => {
  return (
    <Styled.WorkableAreaWrapper>
      <TouchableWithoutFeedback onPress={() => keyboardDismiss && Keyboard.dismiss()}>
        {children}
      </TouchableWithoutFeedback>
    </Styled.WorkableAreaWrapper>
  );
};

export default DeviceWorkableArea;
