import { Box, ClickAwayListener, IconButton, useTheme } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import { useState } from 'react';
import { tokens } from '../../theme';

const filterOptions = [
  '2h',
  '12h',
  '24h',
  'Last 2 days',
  'Last 7 days',
  'Last 15 days',
  'Last 30 days',
];

const Topbar = ({ setactiveFilter, activeFilter }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
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
      }}
    >
      <h4>Pipeline Activity</h4>
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
          {filterOptions.slice(0, 3).map((el, i) => (
            <Box
              key={i}
              onClick={() => setactiveFilter(el)}
              sx={{
                cursor: 'pointer',
                px: 1,
                borderRadius: '4px',
                backgroundColor:
                  activeFilter === el ? colors.blueAccent[500] : '',
              }}
            >
              {el}
            </Box>
          ))}
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
              <IconButton onClick={handleClick}>
                <KeyboardArrowDownOutlinedIcon />
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
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  {filterOptions.slice(3).map((el, i) => (
                    <Box
                      key={i}
                      onClick={() => setactiveFilter(el)}
                      sx={{
                        padding: '12px 20px',
                        cursor: 'pointer',
                        background:
                          activeFilter === el ? colors.blueAccent[500] : '',
                        '&:hover': {
                          background: colors.grey[700],
                        },
                      }}
                    >
                      {el}
                    </Box>
                  ))}
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>
          <Box
            sx={{
              height: '20px',
              width: '1px',
              backgroundColor: colors.primary[300],
            }}
          />
          <IconButton>
            <ReplayOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
