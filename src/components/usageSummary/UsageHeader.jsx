import { Box, ClickAwayListener, IconButton, useTheme } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { tokens } from '../../theme';
import LanguageIcon from '@mui/icons-material/Language';
import FilterListIcon from '@mui/icons-material/FilterList';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const filterOptions = [
  'All',
  '_AWS',
  'Asia (Singapore)',
  'Australia (Sydney)',
  'Europe (Frankfurt)',
  'India (Mumbai)',
  'USA (N. Virginia)',
  'USA (Oregon)',
  '_GCP',
  'USA (N. Virginia)',
];

const UsageHeader = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const [activeFilter, setactiveFilter] = useState('All');

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        padding: '20px 20px 0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pb: '16px',
        borderBottom: `1px solid ${colors.grey[700]}`,
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ fontWeight: 600 }}>Pipeline Usage Summary</Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '12px',
              gap: 1,
              background: colors.grey[700],
              borderRadius: '16px',
              padding: '2px',
              pr: '12px',
            }}
          >
            <LanguageIcon />
            <Box>Data as per UTC timezone</Box>
          </Box>
        </Box>
        <Box sx={{ fontSize: '12px' }}>
          Understand the number of Events loaded through different Pipelines.
          These events are counted against your billing plan.
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
              <IconButton onClick={handleClick}>
                <FilterListIcon />
              </IconButton>
              {open ? (
                <Box
                  sx={{
                    zIndex: 9,
                    position: 'absolute',
                    top: 40,
                    right: 0,
                    background: colors.primary[400],
                    border: `1px solid ${colors.grey[700]}`,
                    width: '180px',
                    height: '300px',
                    overflow: 'auto',
                    borderRadius: '8px',
                  }}
                >
                  {filterOptions.map((el, i) => (
                    <Box
                      key={i}
                      onClick={() =>
                        el.startsWith('_') ? '' : setactiveFilter(el)
                      }
                      sx={{
                        padding: '12px 20px',
                        color: el.startsWith('_') ? colors.grey[500] : '',
                        cursor: 'pointer',
                        background:
                          activeFilter === el ? colors.blueAccent[500] : '',
                        '&:hover': {
                          background: colors.grey[700],
                        },
                      }}
                    >
                      {el.startsWith('_') ? (
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                        >
                          <Box>{el.substring(1)}</Box>
                          <Box
                            sx={{
                              flex: 1,
                              height: '1px',
                              background: colors.grey[700],
                            }}
                          ></Box>
                        </Box>
                      ) : (
                        el
                      )}
                    </Box>
                  ))}
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>

          <IconButton>
            <FileDownloadOutlinedIcon />
          </IconButton>
          <IconButton>
            <ReplayOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default UsageHeader;
