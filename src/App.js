import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import WorkflowExecuteForm from './components/workflowExecuteForm/WorkflowExecuteForm';
import MonitoringForm from './components/monitoringForm/MonitoringForm';
import SchedulingForm from './components/schedulingForm/SchedulingForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/workflow-execute" element={<WorkflowExecuteForm />} />
        <Route path="/workflow-monitoring" element={<MonitoringForm />} />
        <Route path="/workflow-scheduling" element={<SchedulingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
