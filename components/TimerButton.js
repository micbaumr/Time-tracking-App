import { ColorPropType } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.TouchableOpacity`
  margin-top: 10px;
  min-width: 100px;
  border-width: 2px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: ${props => (props.small ? '14px' : '16px')};
  padding: ${props => (props.small ? '5px' : '10px')};
`;

export default function TimerButton({
  color,
  title,
  small,
  onPress,
}) {
  return (
    <Button style={{ borderColor: color }} onPress={onPress}>
      <ButtonText small={small}>{title}</ButtonText>
    </Button>
  );
}
TimerButton.propTypes = {
  color: ColorPropType.isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};
TimerButton.defaultProps = {
  small: false,
};
