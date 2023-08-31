import styled from 'styled-components/native'
import {Colors, Radius, Screen, Spacing, Typography} from "../../theme/constants";

interface Props {}

export const TouchableWrapper = styled.TouchableOpacity<Props>`
	background-color: ${Colors.backgroundPrimary};
	width: ${Screen.containerWidth};
	margin-left: auto;
	margin-right: auto;
	padding: ${Spacing.medium};
	border-left-style: solid;
	border-color: #48dabf;
	border-left-width: 4px;
	border-radius: ${Radius.medium};
  shadow-color: ${Colors.monoBlack};
  shadow-opacity: 0.1;
	shadow-radius: 2px;
  shadow-offset: 0;
	elevation: 3;
`;

export const UpdatedText = styled.Text<Props>`
	color: ${Colors.monoDarkGray};
	font-size: ${Typography.sizeSmall};
	font-family: ${Typography.familyBody};
	align-items: center;
`;

export const BodyContainer = styled.View<Props>`
  margin-top: ${Spacing.medium};
`;

export const Heading = styled.View<Props>`
	display: flex;
`;

export const BoldText = styled.Text<Props>`
  font-size: ${Typography.sizeSmall};
  font-family: ${Typography.familyBody__bold};
`;


export const ErrorMessage = styled.Text<Props>`
`;
