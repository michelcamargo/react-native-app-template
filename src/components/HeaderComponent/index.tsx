import React, { ReactNode } from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
// import Icon from "../../iconpack";
// import { Colors, Spacing} from "../../../theme/native.global";
// import * as Header from './styles';
// import HeaderShippingSelector from "../../customer/addresses/header-shipping-selector";
import { anchorNavigate } from '../navigation';
import theme from '../../theme';

type HeaderProps = {
  children?: ReactNode
}

const HeaderComponent = ({ children }: HeaderProps) => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default HeaderComponent;
