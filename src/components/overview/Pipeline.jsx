import { Box, Tooltip, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NoMaxWidthTooltip } from './NoMaxWidthTooltip';
import { data } from './overviewDummyData';

const Pipeline = ({ activeFilter, barChartTooltip }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        p: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 3,
        backgroundColor: colors.primary[400],
        borderRadius: '5px',
      }}
    >
      {data[activeFilter].map((el, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
          }}
        >
          <Box>
            {/* top */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span>{el.icon}</span>
              <span>{el.title}</span>
            </Box>
            {/* middle */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: colors.blueAccent[500],
              }}
            >
              <NoMaxWidthTooltip
                arrow
                title={barChartTooltip({
                  billable: 0,
                  nonBillable: 243,
                  timestamp: 'Nov 10th 2022 - Nov 30th 2022',
                })}
              >
                <h1 style={{ margin: 0 }}>{el.eventCount}</h1>
              </NoMaxWidthTooltip>
              {/* chart */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-betweeen',
                  alignItems: 'baseline',
                  gap: '2px',
                }}
              >
                {el.timeline.map((el, i) => (
                  <NoMaxWidthTooltip arrow key={i} title={barChartTooltip(el)}>
                    <Box
                      sx={{
                        width: '5px',
                        height: `${el.total / 10}px`,
                        borderRadius: `${el.total ? '4px' : '0'}`,
                        minHeight: '1px',
                        background: colors.blueAccent[500],
                        cursor: 'pointer',
                        '&:hover': {
                          opacity: 0.5,
                        },
                      }}
                    ></Box>
                  </NoMaxWidthTooltip>
                ))}
              </Box>
              <ArrowForwardIosIcon sx={{ color: colors.grey[500] }} />
            </Box>
            {/* bottom */}
            <Tooltip
              arrow
              title={
                <Typography>
                  Average Throughput <br /> (Events Per Minute)
                </Typography>
              }
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: colors.grey[500],
                }}
              >
                <NetworkCheckIcon sx={{ fontSize: '14px' }} />
                <small>{el.average} epm</small>
              </Box>
            </Tooltip>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Pipeline;
