import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';
import PropTypes from 'prop-types';

const TimerContainer = styled.View`
  background-color: #fff;
  border-color: #d6d7da;
  border-width: 2px;
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
  margin-bottom: 15px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
const ElapsedTime = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default function Timer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onEditPress,
  onRemovePress,
  onStartPress,
  onStopPress,
}) {
  const handleRemovePress = () => {
    onRemovePress(id);
  };
  const handleStartPress = () => {
    onStartPress(id);
  };
  const handleStopPress = () => {
    onStopPress(id);
  };
  const renderActionButton = () => {
    return !isRunning ? (
      <TimerButton
        color="#21BA45"
        title="Start"
        onPress={handleStartPress}
      />
    ) : (
      <TimerButton
        color="red"
        title="Stop"
        onPress={handleStopPress}
      />
    );
  };
  const elapsedString = millisecondsToHuman(elapsed);
  return (
    <TimerContainer>
      <Title>{title}</Title>
      <Text>{project}</Text>
      <ElapsedTime>{elapsedString}</ElapsedTime>
      <ButtonGroup>
        <TimerButton
          color="blue"
          small
          title="Edit"
          onPress={onEditPress}
        />
        <TimerButton
          color="blue"
          small
          title="Remove"
          onPress={handleRemovePress}
        />
      </ButtonGroup>
      {renderActionButton()}
    </TimerContainer>
  );
}
Timer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  onEditPress: PropTypes.func.isRequired,
  onRemovePress: PropTypes.func.isRequired,
  onStopPress: PropTypes.func.isRequired,
  onStartPress: PropTypes.func.isRequired,
};
