import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #c2cdc1;
`;

const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const RegistrationForm = () => {
  const [workflowName, setWorkflowName] = useState('');
  const [configFile, setConfigFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/json') {
      setConfigFile(file);
      setError(''); // Clear any previous error
    } else {
      setError('Please upload a valid JSON file.');
    }
  };

  const handleCreateWorkflow = () => {
    if (!workflowName) {
      setError('Workflow name is required.');
      return;
    }

    if (!configFile) {
      setError('Config.json file is required.');
      return;
    }

    // Store config.json in localStorage
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const jsonContent = JSON.parse(reader.result);
        localStorage.setItem('configFile', JSON.stringify(jsonContent));
        localStorage.setItem('workflowName', workflowName);
        setError(''); // Clear any previous error
        // Navigate to WorkflowExecuteForm
        navigate('/workflow-execute');
      } catch (e) {
        setError('Invalid JSON file.');
      }
    };
    reader.readAsText(configFile);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Registration Form
      </Typography>
      <FormWrapper>
        {error && <Alert severity="error">{error}</Alert>}
        <Typography variant="h6">Workflow Name:</Typography>
        <TextField
          label="Enter Workflow Name"
          variant="outlined"
          value={workflowName}
          onChange={(e) => setWorkflowName(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          component="label"
        >
          Upload your Config.json
          <input
            type="file"
            accept=".json"
            hidden
            onChange={handleFileUpload}
          />
        </Button>
        <ButtonWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateWorkflow}
          >
            Create Workflow
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Container>
  );
};

export default RegistrationForm;
