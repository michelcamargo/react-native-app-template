import React from 'react';
import {BaseToast, ErrorToast, ToastConfigParams} from 'react-native-toast-message';
// import * as Styled from './styles'
// import CustomText from "../general-ui/Text";
import {Colors, Typography} from "../../theme/constants";
import { anchorNavigate } from "../Navigation";
import {View, Text, TouchableOpacity} from "react-native";

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
		<View>
			<View>
				{/*<CustomText bold>{text1}</CustomText>*/}
				<Text>{text1}</Text>
			</View>
			
			{ text2 &&
				<View>
					{/*<CustomText size={Typography.sizeSmall} color={Colors.monoDarkGray}>{text2}</CustomText>*/}
					<Text>{text2}</Text>
				</View>
			}
		</View>
	),

	info: ({ text1, text2, props }: OptionsProps) => (
		<View>
			<View>
				{/*<CustomText bold>{text1}</CustomText>*/}
				<Text>{text1}</Text>
			</View>
			
			{ text2 &&
        <Styled.BodyContainer>
	        <Text>{text2}</Text>
        </Styled.BodyContainer>
			}
		</View>
	),

	error: (props: ToastConfigParams<any>) => (
		<ErrorToast
			{...props}
			text1Style={{
				fontSize: 16,
				fontFamily: Typography.familyBody__bold
			}}
			text2Style={{
				fontSize: 13,
			}}
		/>
		
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
				<CustomText bold>{'Pedido atualizado!'}</CustomText>
			</View>
			
			{ props.quantity > 0
				? (
					<View>
						<View>{props.quantity + 'x ' + props.productName + ' '}</View>
						adicionado ao pedido.
					</View>
				)
				: (
					<Styled.UpdatedText>
						Item
						<Styled.BoldText>{' ' + props.productName + ' '}</Styled.BoldText>
						removido do pedido.
					</Styled.UpdatedText>
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


export default toastConfig
