import React, { ReactNode } from 'react';
import Toast from "react-native-toast-message";

interface Props {
	children: ReactNode,
	ms: number
}


class Toaster {
	
	public static showInfo = (headingText?: string, bodyText?: string, duration?: number, topOffset?: number) => {
		return Toast.show({
			type: 'info',
			text1: headingText,
			text2: bodyText,
			visibilityTime: duration,
			topOffset: topOffset || 80
		})
	}
	
	public static showError = (headingText: string, bodyText?: string, duration?: number, topOffset?: number) => {
		return Toast.show({
			type: 'error',
			text1: headingText,
			text2: bodyText,
			visibilityTime: duration,
			topOffset: topOffset || 80
		})
	}
	
	public static showSuccess = (message: string, message2?: string, duration?: number, topOffset?: number) => {
		return Toast.show({
			type: 'success',
			text1: message,
			text2: message2,
			visibilityTime: duration,
			topOffset: topOffset || 80
		})
	}
	
	public static orderError = (headingText: string, bodyText?: string, duration?: number, topOffset?: number) => {
		return Toast.show({
			type: 'orderError',
			text1: headingText,
			text2: bodyText,
			visibilityTime: duration,
			topOffset: topOffset || 80
		})
	}
	
	public static orderUpdate = (productName: string, selectedQuantity: number, topOffset?: number) => {
		return Toast.show({
			type: 'orderUpdate',
			topOffset: topOffset || 80,
			props: {
				productName: productName,
				quantity: selectedQuantity
			}
		})
	}
}

export default Toaster