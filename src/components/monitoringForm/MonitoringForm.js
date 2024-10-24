import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  TextField, 
  Typography 
} from '@mui/material';
import { styled } from '@mui/system';

// Sample data for demonstration
const data = [
  { id: 'Step 01', type: 'Connectors', status: 'Successful' },
  { id: 'Step 02', type: 'Transformation', status: 'Failed' },
  { id: 'Step 03', type: 'Connectors', status: 'Successful' },
  { id: 'Step 04', type: 'Connectors', status: 'Running' },
];

// Styled Components using @mui/system
const MonitoringContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: 'auto',
  maxWidth: 700,
  backgroundColor: '#D3E0D3',
}));

const WorkflowNameContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
}));

const RetryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.error.main,
}));

const MonitoringForm = () => {
  const handleRetry = (stepId) => {
    // Implement the retry logic here
    console.log(`Retry clicked for ${stepId}`);
  };

  return (
    <MonitoringContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Monitoring Page
      </Typography>
      
      <WorkflowNameContainer>
        <Typography variant="h6">Workflow Name:</Typography>
        <TextField 
          variant="outlined" 
          fullWidth 
          placeholder="Enter Workflow Name" 
        />
      </WorkflowNameContainer>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Steps</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Current Status</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  {row.status === 'Failed' && (
                    <RetryButton 
                      variant="contained" 
                      color="secondary" 
                      onClick={() => handleRetry(row.id)}
                    >
                      Retry
                    </RetryButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MonitoringContainer>
  );
};

export default MonitoringForm;
