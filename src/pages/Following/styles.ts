import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const StatusBarHeight =
	Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
	background: ${colors.primary};
	padding-top: ${StatusBarHeight + 'px'};
	flex: 1;
`;

export const Container = styled.View`
	padding-left: 14px;
`;

export const Main = styled.View``;
