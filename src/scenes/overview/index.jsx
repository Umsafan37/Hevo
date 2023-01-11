import { Box } from '@mui/material';
import React from 'react';
import OverviewTop from '../../components/overview/OverviewTop';
import OverviewMain from '../../components/overview/OverviewMain';

const Overview = () => {
  return (
    <Box p="20px">
      <OverviewTop />
      <OverviewMain />
    </Box>
  );
};

export default Overview;
