import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const usageData = [
  {
    id: 2,
    loc: 'ASIA',
    first: ['REST API Source', 'REST API'],
    second: ['Snowflake Destination', 'Snowflake'],
    today: 0,
    thisMonth: '3.13K',
    status: 'DELETED',
  },
  {
    id: 1,
    loc: 'ASIA',
    first: ['Google Sheets Source', 'Google Sheets'],
    second: ['Snowflake Destination', 'Snowflake'],
    today: 0,
    thisMonth: '1.26K',
    status: 'DELETED',
  },
];

const UsageTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {/* table header */}
      <Box sx={{ p: '20px' }}>
        {/* table header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ flex: 7 }}>
            <Typography sx={{ color: colors.grey[500] }}>Pipelines</Typography>
            <strong>0 active out of 2</strong>
          </Box>
          <Box sx={{ flex: 2 }}>
            <Typography sx={{ color: colors.grey[500] }}>Today</Typography>
            <strong>0</strong>
          </Box>
          <Box sx={{ flex: 2 }}>
            <Typography sx={{ color: colors.grey[500] }}>
              Nov 03 - dec 02 &darr;
            </Typography>
            <strong>4.39K</strong>
          </Box>
          <Box sx={{ flex: 1 }} />
        </Box>
      </Box>

      {/* table main */}
      {usageData.map((data, i) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            p: '16px',
            gap: 2,
            backgroundColor: colors.primary[400],
            borderRadius: '5px',
            color: data.status === 'DELETED' ? colors.grey[300] : '',
          }}
        >
          <Box
            sx={{
              flex: 7,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box
              sx={{
                p: '4px',
                backgroundColor: colors.grey[700],
                borderRadius: '4px',
              }}
            >
              {data.loc}
            </Box>
            <Box>#{data.id}</Box>
            <Box
              sx={{
                height: '20px',
                width: '1px',
                backgroundColor: colors.primary[300],
              }}
            />

            <Box
              sx={{
                flex: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                  {data.first[0]}
                </Typography>

                <Box sx={{ fontSize: 12 }}>{data.first[1]}</Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: 4,
                    height: 4,
                    background: colors.greenAccent[500],
                    borderRadius: '50%',
                  }}
                ></div>
                <div
                  style={{
                    width: 4,
                    height: 4,
                    background: colors.greenAccent[500],
                    borderRadius: '50%',
                  }}
                ></div>
                <ArrowForwardRoundedIcon
                  stroke="10px"
                  fontSize="large"
                  sx={{
                    color: colors.greenAccent[500],
                    fontWeight: 'bold',
                    m: 0,
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ flex: 5, display: 'flex', alignItems: 'center' }}>
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                  {data.second[0]}
                </Typography>

                <Box sx={{ fontSize: 12 }}>{data.second[1]}</Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: 2 }}>{data.today}</Box>
          <Box sx={{ flex: 2 }}>{data.thisMonth}</Box>

          <Box sx={{ flex: 1, ml: 'auto' }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: colors.redAccent[500],
                px: 1,
                py: '4px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              {data.status}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default UsageTable;
