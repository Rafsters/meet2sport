import styled from 'styled-components';
import { Text, ListItem } from 'native-base';

const TextSmall = styled(Text)`
  font-size: 10px;
  color: #5b5b5b;
`;

const ListItemWrapper = styled(ListItem)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export {
  TextSmall,
  ListItemWrapper,
};
