import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/primitives';
import { TouchableOpacity } from 'react-native';

import Column from '../layout/Column';
import CoinIcon from '../CoinIcon';
import Row from '../layout/Row';
import { padding } from '../../styles';

const Container = styled(Row)`
  ${padding(12, 19, 12, 15)}
  width: 100%;
`;

const Content = styled(Column)`
  flex-grow: 1;
  height: 40px;
  margin-left: 12px;
`;

const CoinRow = ({
  address,
  balance,
  bottomRowRender,
  name,
  native,
  onPress,
  style,
  symbol,
  topRowRender,
}) => (
  <Container component={TouchableOpacity} align="center" onPress={onPress} activeOpacity={onPress ? 0.2 : 1} style={style}>
    <CoinIcon symbol={symbol} />
    <Content justify="space-between">
      <Row align="center" justify="space-between">
        {topRowRender({
          address,
          balance,
          native,
          name,
          symbol,
        })}
      </Row>
      <Row align="center" justify="space-between">
        {bottomRowRender({
          address,
          balance,
          native,
          name,
          symbol,
        })}
      </Row>
    </Content>
  </Container>
);

CoinRow.propTypes = {
  address: PropTypes.string,
  balance: PropTypes.object,
  bottomRowRender: PropTypes.func,
  name: PropTypes.string,
  native: PropTypes.object,
  onPress: PropTypes.func,
  style: PropTypes.any,
  symbol: PropTypes.string,
  topRowRender: PropTypes.func,
};

export default CoinRow;
