import React from 'react';
import { Box } from '@mui/material';
import UsageHeader from '../../components/usageSummary/UsageHeader';
import UsageTable from '../../components/usageSummary/UsageTable';

const UsageSummary = () => {
  return (
    <Box sx={{ p: '20px' }}>
      <UsageHeader />
      <UsageTable />
    </Box>
  );
};

export default UsageSummary;
