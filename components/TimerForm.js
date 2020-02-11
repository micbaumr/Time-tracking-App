import React, { useState } from 'react';
import TimerButton from './TimerButton';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormContainer = styled.View`
  background-color: #fff;
  border-color: #d6d7da;
  border-width: 2px;
  border-radius: 15px;
  padding: 15px;
  margin: 15px;
  margin-bottom: 0px;
`;
const AttributeContainer = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
`;
const TextInputTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const TextInputContainer = styled.View`
  border-color: #d6d7da;
  border-radius: 2px;
  border-width: 1px;
  margin-bottom: 5px;
`;
const TextInput = styled.TextInput`
  height: 30px;
  padding: 5px;
  font-size: 12px;
`;
const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default function TimerForm(props) {
  const { id, onFormClose, onFormSubmit } = props;
  const [title, setTitle] = useState(id ? props.title : '');
  const [project, setProject] = useState(id ? props.project : '');

  const handleSubmit = () => {
    onFormSubmit({
      id,
      title,
      project,
    });
  };
  const submitText = props.id ? 'Update' : 'Create';
  return (
    <FormContainer>
      <AttributeContainer>
        <TextInputTitle>Title</TextInputTitle>
        <TextInputContainer>
          <TextInput
            underlineColorAndroid="transparent"
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </TextInputContainer>
      </AttributeContainer>
      <AttributeContainer>
        <TextInputTitle>Project</TextInputTitle>
        <TextInputContainer>
          <TextInput
            underlineColorAndroid="transparent"
            value={project}
            onChangeText={text => setProject(text)}
          />
        </TextInputContainer>
      </AttributeContainer>
      <ButtonGroup>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          small
          onPress={handleSubmit}
        />
        <TimerButton
          small
          color="#DB2828"
          title="Cancel"
          small
          onPress={onFormClose}
        />
      </ButtonGroup>
    </FormContainer>
  );
}
TimerForm.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  project: PropTypes.string,
  onFormSubmit: PropTypes.func.isRequired,
  onFormClose: PropTypes.func.isRequired,
};

TimerForm.defaultProps = {
  id: null,
  title: '',
  project: '',
};
