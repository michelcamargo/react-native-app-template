import styled from 'styled-components/native';

interface Props {}

export const TouchableWrapper = styled.TouchableOpacity<Props>`
	background-color: ${({ theme }) => theme?.colors.backgroundPrimary};
	width: ${({ theme }) => theme?.screen.containerWidth};
	margin-left: auto;
	margin-right: auto;
	padding: ${({ theme }) => theme?.spacing.medium};
	border-left-style: solid;
	border-color: #48dabf;
	border-left-width: 4px;
	border-radius: ${({ theme }) => theme?.radius.medium};
  shadow-color: ${({ theme }) => theme?.colors.monoBlack};
  shadow-opacity: 0.1;
	shadow-radius: 2px;
  shadow-offset: 0;
	elevation: 3;
`;

export const UpdatedText = styled.Text<Props>`
	color: ${({ theme }) => theme?.colors.monoDarkGray};
	font-size: ${({ theme }) => theme?.typography.sizeSmall};
	font-family: ${({ theme }) => theme?.typography.familyBody};
	align-items: center;
`;

export const BodyContainer = styled.View<Props>`
  margin-top: ${({ theme }) => theme?.spacing.medium};
`;

export const Heading = styled.View<Props>`
	display: flex;
`;

export const BoldText = styled.Text<Props>`
  font-size: ${({ theme }) => theme?.typography.sizeSmall};
  font-family: ${({ theme }) => theme?.typography.familyBody__bold};
`;

export const ErrorMessage = styled.Text<Props>`
`;

export default {
  TouchableWrapper, UpdatedText, BodyContainer, Heading, BoldText, ErrorMessage
};
