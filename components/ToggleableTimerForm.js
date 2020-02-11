import React, { useState } from 'react';
import styled from 'styled-components';
import TimerForm from './TimerForm';
import TimerButton from './TimerButton';
import PropTypes from 'prop-types';

const Container = styled.View`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: ${props => (!props.isOpen ? '15px' : '0px')};
  padding-right: ${props => (!props.isOpen ? '15px' : '0px')};
`;

export default function ToggleableTimerForm({ onFormSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(prevState => !prevState);
  };
  const handleFormClose = () => {
    setIsOpen(false);
  };
  const handleFormSubmit = timer => {
    onFormSubmit(timer);
    setIsOpen(false);
  };

  return (
    <Container isOpen={isOpen}>
      {isOpen ? (
        <TimerForm
          onFormSubmit={handleFormSubmit}
          onFormClose={handleFormClose}
        />
      ) : (
        <TimerButton
          title="+"
          color="black"
          onPress={handleIsOpen}
          small={false}
        />
      )}
    </Container>
  );
}
ToggleableTimerForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
