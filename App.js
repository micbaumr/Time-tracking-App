import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components';

import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import uuid4 from 'uuid/v4';
import { newTimer } from './utils/TimerUtils';
import PropTypes from 'prop-types';

const AppContainer = styled.View`
  flex: 1;
`;
const TitleContainer = styled.View`
  padding-top: 35px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #d6d7da;
`;
const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
const TimerList = styled.ScrollView`
  padding-bottom: 15px;
`;
const TimerListContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

export default function App() {
  const [timers, setTimer] = useState([
    {
      id: uuid4(),
      title: 'Add',
      project: 'Chapter 1',
      elapsed: 0,
      isRunning: true,
    },
    {
      id: uuid4(),
      title: 'Delete',
      project: 'Chapter 2',
      elapsed: 3,
      isRunning: false,
    },
  ]);
  useEffect(() => {
    const TIME_INTERVAL = 1000;
    const intervalId = setInterval(() => {
      const newTimers = timers.map(timer => {
        const { elapsed, isRunning } = timer;
        return {
          ...timer,
          elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
        };
      });
      setTimer(newTimers);
    }, TIME_INTERVAL);
    return () => {
      clearInterval(intervalId);
    };
  }, [timers]);

  const handleCreateFormSubmit = timer => {
    setTimer([newTimer(timer), ...timers]);
  };
  const handleFormSubmit = attrs => {
    setTimer(
      timers.map(timer => {
        if (timer.id === attrs.id) {
          const { title, project } = attrs;
          return {
            ...timer,
            title,
            project,
          };
        }
        return timer;
      }),
    );
  };
  const onRemovePress = timerId => {
    const newtimers = timers.filter(timer => timer.id !== timerId);

    setTimer(newtimers);
  };

  const toggleTimer = timerId => {
    setTimer(
      timers.map(timer => {
        const { id, isRunning } = timer;
        if (id === timerId) {
          return {
            ...timer,
            isRunning: !isRunning,
          };
        }
        return timer;
      }),
    );
  };
  return (
    <>
      <AppContainer>
        <TitleContainer>
          <Title>Timers</Title>
        </TitleContainer>
        <TimerListContainer behavior="padding">
          <TimerList>
            <ToggleableTimerForm
              onFormSubmit={handleCreateFormSubmit}
            />
            {timers.map(
              ({ id, title, project, elapsed, isRunning }) => (
                <EditableTimer
                  key={id}
                  id={id}
                  title={title}
                  project={project}
                  elapsed={elapsed}
                  isRunning={isRunning}
                  onFormSubmit={handleFormSubmit}
                  onRemovePress={onRemovePress}
                  onStartPress={toggleTimer}
                  onStopPress={toggleTimer}
                />
              ),
            )}
          </TimerList>
        </TimerListContainer>
      </AppContainer>
    </>
  );
}
