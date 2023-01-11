import { Box, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { tokens } from '../../theme';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Topbar from './Topbar';
import Objects from './Objects';
import Pipeline from './Pipeline';

const OverviewMain = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [activeFilter, setactiveFilter] = useState('24h');

  const barChartTooltip = (data) => {
    return (
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box>
            <Typography>
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 8,
                  background: colors.blueAccent[500],
                  marginRight: 8,
                }}
              ></span>
              Billable
            </Typography>
            <Typography>{data.billable}</Typography>
          </Box>
          <Box>
            <Typography>
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 8,
                  background: colors.blueAccent[500],
                  marginRight: 8,
                }}
              ></span>
              Non-Billable
            </Typography>
            <Typography>{data.nonBillable}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 2 }}>
          <AccessTimeOutlinedIcon />
          <Typography>{data.timestamp}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <div id="pipeline-activity">
      {/*pipeline activity*/}
      <Topbar setactiveFilter={setactiveFilter} activeFilter={activeFilter} />
      <Pipeline activeFilter={activeFilter} barChartTooltip={barChartTooltip} />
      {/* objects */}
      <Objects barChartTooltip={barChartTooltip} />
    </div>
  );
};

export default OverviewMain;
