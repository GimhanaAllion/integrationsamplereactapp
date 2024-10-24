import React from 'react';
import { Box, Typography } from '@mui/material';

const WorkflowExecuteForm = () => {
  const workflowName = localStorage.getItem('workflowName');
  const configFile = JSON.parse(localStorage.getItem('configFile'));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Typography variant="h4" gutterBottom>
        Workflow Execution
      </Typography>
      <Typography variant="h6">Workflow Name: {workflowName}</Typography>
      <Typography variant="h6">Config File Content:</Typography>
      <pre>{JSON.stringify(configFile, null, 2)}</pre>
    </Box>
  );
};

export default WorkflowExecuteForm;
