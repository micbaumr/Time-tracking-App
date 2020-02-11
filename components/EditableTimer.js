import React, { useState } from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import TimerForm from './TimerForm';
import PropTypes from 'prop-types';

const TitleContainer = styled.View`
  padding-top: 35px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #d6d7da;
`;

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onFormSubmit,
  onRemovePress,
  onStopPress,
  onStartPress,
}) {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const handleEditPress = () => {
    openForm();
  };
  const handleFormClose = () => {
    closeForm();
  };
  const handleSubmit = timer => {
    onFormSubmit(timer);
    closeForm();
  };
  const closeForm = () => {
    setEditFormOpen(false);
  };
  const openForm = () => {
    setEditFormOpen(true);
  };

  return editFormOpen ? (
    <TimerForm
      id={id}
      title={title}
      project={project}
      onFormSubmit={handleSubmit}
      onFormClose={handleFormClose}
    />
  ) : (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      onEditPress={handleEditPress}
      onRemovePress={onRemovePress}
      onStartPress={onStartPress}
      onStopPress={onStopPress}
    />
  );
}

EditableTimer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onRemovePress: PropTypes.func.isRequired,
  onStopPress: PropTypes.func.isRequired,
  onStartPress: PropTypes.func.isRequired,
};
