import styled from 'styled-components/native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeText = styled(Text)`
  margin-bottom: 16px;
`;
