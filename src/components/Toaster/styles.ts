import styled from 'styled-components/native';

interface Props {}

export const TouchableWrapper = styled.TouchableOpacity<Props>`
	background-color: ${({ theme }) => theme?.colors.background.primary};
	width: ${({ theme }) => theme?.screen.containerWidth};
	margin-left: auto;
	margin-right: auto;
	padding: ${({ theme }) => theme?.spacing.medium};
	border-left-style: solid;
	border-color: #48dabf;
	border-left-width: 4px;
	border-radius: ${({ theme }) => theme?.radius.medium};
  shadow-color: ${({ theme }) => theme?.colors.light[2]};
  shadow-opacity: 0.1;
	shadow-radius: 2px;
  shadow-offset: 0;
	elevation: 3;
`;

export const UpdatedText = styled.Text<Props>`
	color: ${({ theme }) => theme?.colors.light[1]};
	font-size: ${({ theme }) => theme?.typography.size.small};
	font-family: ${({ theme }) => theme?.typography.family.body};
	align-items: center;
`;

export const BodyContainer = styled.View<Props>`
  margin-top: ${({ theme }) => theme?.spacing.medium};
`;

export const Heading = styled.View<Props>`
	display: flex;
`;

export const BoldText = styled.Text<Props>`
  font-size: ${({ theme }) => theme?.typography.size.small};
  font-family: ${({ theme }) => theme?.typography.family.bodyBold};
`;

export const ErrorMessage = styled.Text<Props>`
`;

export default {
  TouchableWrapper, UpdatedText, BodyContainer, Heading, BoldText, ErrorMessage
};
