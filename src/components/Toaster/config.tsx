import React from 'react';

import { View, Text, TouchableOpacity } from "react-native";
import { ToastConfigParams } from 'react-native-toast-message';

import { anchorNavigate } from "../Navigation";
import Styled from './styles';

interface OptionsProps {
	type?: string,
	text1?: string,
	text2?:	string,
	position?: 'top' | 'bottom',
	visibilityTime?: number,
	autoHide?: boolean,
	topOffset?: number,
	bottomOffset?: number,
	keyboardOffset?: number,
	onShow?: () => void
	onHide?: () => void,
	onPress?:	() => void,
	props: any
}

const toastConfig = {
  // success: (props: ToastConfigParams<any>) => (
  // 	<BaseToast
  // 		{...props}
  // 		style={{ borderLeftColor: Colors.success }}
  // 		contentContainerStyle={{ paddingHorizontal: 15 }}
  // 		text1Style={{
  // 			fontSize: 14,
  // 			fontFamily: Typography.familyBody__bold
  // 		}}
  // 		text2Style={{
  // 			fontSize: 12,
  // 			fontFamily: Typography.familyBody
  // 		}}
  // 	/>
  // ),

  success: ({ text1, text2, props }: OptionsProps) => (
    <Styled.TouchableWrapper>
      <Styled.BodyContainer>
        <View>
          {/*<CustomText bold>{text1}</CustomText>*/}
          <Text>{text1}</Text>
        </View>
  
        {text2 &&
          <View>
            {/*<CustomText size={Typography.sizeSmall} color={Colors.monoDarkGray}>{text2}</CustomText>*/}
            <Text>{text2}</Text>
          </View>
        }
      </Styled.BodyContainer>
    </Styled.TouchableWrapper>
  ),

  info: ({ text1, text2, props }: OptionsProps) => (
    <Styled.TouchableWrapper>
      <Styled.BodyContainer>
        <View>
          {/*<CustomText bold>{text1}</CustomText>*/}
          <Text>{text1}</Text>
        </View>
  
        { text2 &&
          <View>
            <Text>{text2}</Text>
          </View>
        }
      </Styled.BodyContainer>
    </Styled.TouchableWrapper>
  ),

  error: (props: ToastConfigParams<any>) => (
    <Styled.ErrorToast {...props} />
    // <ErrorToast
    //   {...props}
    //   text1Style={{
    //     fontSize: 16,
    //     fontFamily: Typography.familyBody__bold
    //   }}
    //   text2Style={{
    //     fontSize: 13,
    //   }}
    // />
		
  ),
	
  // error: ({ text1, text2, props }: OptionsProps) => (
  // 	<Styled.TouchableWrapper onPress={() => anchorNavigate('cart')}>
  // 		<Styled.Heading>
  // 			<CustomText size={Typography.sizeSemiLarge} bold>{text1}</CustomText>
  // 		</Styled.Heading>
  // 		<Styled.UpdatedText>
  // 			<CustomText size={Typography.sizeSemiLarge} bold>{text2}</CustomText>
  // 		</Styled.UpdatedText>
  // 	</Styled.TouchableWrapper>
  //
  // ),
	
  orderUpdate: ({ props }: OptionsProps) => (
    <TouchableOpacity onPress={() => anchorNavigate('cart')}>
      <View>
        <Text>{'Pedido atualizado!'}</Text>
      </View>
			
      { props.quantity > 0
        ? (
          <View>
            <View>{props.quantity + 'x ' + props.productName + ' '}</View>
            adicionado ao pedido.
          </View>
        )
        : (
          <Text>
            Item
            <Text>{' ' + props.productName + ' '}</Text>
            removido do pedido.
          </Text>
        )
      }
    </TouchableOpacity>
  ),
	
  orderError: ({ text1, text2, props }: OptionsProps) => (
    <View>
      <View>
        <Text bold>{text1}</Text>
      </View>
			
      <Text>
        {text2}
      </Text>
    </View>
  )
};

export default toastConfig;
