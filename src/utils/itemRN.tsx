import styled from 'styled-components/native';
import theme from '../constants/theme';

export const Row = styled.View`
  flex-direction: row;
`;

export const RowCenter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const Label = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.white};
`;
