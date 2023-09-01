import React, { ReactNode } from 'react';

import { View, Text } from "react-native";

// import Icon from "../../iconpack";
// import { Colors, Spacing} from "../../../theme/native.global";
// import * as Header from './styles';
// import HeaderShippingSelector from "../../customer/addresses/header-shipping-selector";
// import theme from '../../theme';
// import { anchorNavigate } from '../navigation';

type HeaderProps = {
  children?: ReactNode
}

const HeaderComponent = ({ children }: HeaderProps) => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

export default HeaderComponent;
