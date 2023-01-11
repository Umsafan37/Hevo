import React from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { tokens } from '../../theme';
import NorthIcon from '@mui/icons-material/North';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { styled } from '@mui/material/styles';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});
const OverviewTop = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const sheetsTooltip = (
    <div style={{ fontSize: 12 }}>
      <div style={{ padding: '8px 0' }}>
        <span style={{ fontWeight: 600 }}>Authorized User Account: </span>
        notionclientservices@gmail.com
        <IconButton>
          <BorderColorOutlinedIcon sx={{ width: 24 }} />
        </IconButton>
      </div>
      <div style={{ padding: '8px 0', borderBottom: '1px dashed gray' }}>
        <span style={{ fontWeight: 600 }}>
          Replicate JSON fields to JSON columns:{' '}
        </span>
        Replicate JSON fields to JSON columns
      </div>
      <div style={{ padding: '8px 0', borderBottom: '1px dashed gray' }}>
        <span style={{ fontWeight: 600 }}>Include new objects: </span>true
      </div>
      <div style={{ padding: '8px 0', borderBottom: '1px dashed gray' }}>
        <span style={{ fontWeight: 600 }}>Destination Prefix: </span>Snowflake
      </div>
      <div style={{ padding: '8px 0', color: colors.blueAccent[400] }}>
        Reauthorise Account
      </div>
    </div>
  );
  const snowflakeTooltip = (
    <div style={{ fontSize: 12 }}>
      <div style={{ padding: '8px 0' }}>
        <span style={{ fontWeight: 600 }}>Account Name:</span>
        ik06771
        <IconButton>
          <BorderColorOutlinedIcon sx={{ width: 24 }} />
        </IconButton>
      </div>
      <div style={{ padding: '8px 0', borderBottom: '1px dashed gray' }}>
        <span style={{ fontWeight: 600 }}>Region:</span> Southeast-asia.azure
      </div>
      <div style={{ padding: '8px 0', borderBottom: '1px dashed gray' }}>
        <span style={{ fontWeight: 600 }}>Warehouse: </span>GROCERY
      </div>
      <div style={{ padding: '8px 0', borderBottom: '1px dashed gray' }}>
        <span style={{ fontWeight: 600 }}>User:</span> SHANKARI
      </div>
      <div style={{ padding: '8px 0', borderBottom: '1px dashed gray' }}>
        <span style={{ fontWeight: 600 }}>Database:</span> A1GROCERY
      </div>
      <div style={{ padding: '8px 0', borderBottom: '1px dashed gray' }}>
        <span style={{ fontWeight: 600 }}>Schema: </span>PYDANTIC
      </div>
      <div style={{ padding: '8px 0', borderBottom: '1px dashed gray' }}>
        <span style={{ fontWeight: 600 }}>Populate Loaded Timestamp: </span>
        true
      </div>
      <div style={{ padding: '8px 0' }}>
        {' '}
        <span style={{ fontWeight: 600 }}>Transition Tables:</span> false
      </div>
    </div>
  );

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <Box
      p="20px"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 3,
        backgroundColor: colors.primary[400],
        borderRadius: '5px',
      }}
    >
      <Tooltip
        arrow
        placement="right"
        title={
          <div style={{ fontSize: 12 }}>Click to assign a higher priority</div>
        }
        place="right"
        sx={{ fontSize: 12 }}
      >
        <NorthIcon
          color={colors.primary[400]}
          sx={{
            p: '4px',
            backgroundColor: colors.grey[700],
            borderRadius: '4px',
          }}
        />
      </Tooltip>
      <Typography>#1</Typography>
      <Box
        sx={{
          height: '20px',
          width: '1px',
          backgroundColor: colors.primary[300],
        }}
      />
      {/* google sheets source */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton
          sx={{
            width: 40,
            height: 40,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: colors.greenAccent[800],
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 180 252"
            version="1.1"
          >
            <title>Group</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="google-sheets-seeklogo.com"
                transform="translate(-216.000000, -270.000000)"
              >
                <g id="Group" transform="translate(216.000000, 270.742000)">
                  <path
                    d="M180,236.038 C180,244.032 173.517,250.516 165.523,250.516 L14.477,250.516 C6.483,250.516 0,244.032 0,236.038 L0,14.538 C0,6.544 6.483,0.061 14.477,0.061 L111.595,0.061 L180,70.125 L180,236.038"
                    id="Fill-1"
                    fill="#23A566"
                  />
                  <path
                    d="M119.135,68.347 L180,126.496 L179.821,70.035 L179.719,70.032 L125.951,70.032 C123.501,70.032 121.194,69.423 119.171,68.348 L119.135,68.347"
                    id="Fill-2"
                    fill="#1C8F5A"
                  />
                  <path
                    d="M180,70.032 L125.951,70.032 C117.957,70.032 111.474,63.549 111.474,55.555 L111.474,0 L180,70.032"
                    id="Fill-3"
                    fill="#8ED1B1"
                  />
                  <path
                    d="M43.191,204.189 L136.809,204.189 L136.809,123.117 L43.191,123.117 L43.191,204.189 Z M95.789,149.176 L125.227,149.176 L125.227,134.699 L95.789,134.699 L95.789,149.176 Z M95.789,171.375 L125.227,171.375 L125.227,157.862 L95.789,157.862 L95.789,171.375 Z M95.789,192.607 L125.227,192.607 L125.227,180.061 L95.789,180.061 L95.789,192.607 Z M54.773,192.607 L84.208,192.607 L84.208,180.061 L54.773,180.061 L54.773,192.607 Z M54.773,171.375 L84.208,171.375 L84.208,157.862 L54.773,157.862 L54.773,171.375 Z M54.773,149.176 L84.208,149.176 L84.208,134.699 L54.773,134.699 L54.773,149.176 Z"
                    id="Fill-4"
                    fill="#FFFFFF"
                  />
                </g>
              </g>
            </g>
          </svg>
        </IconButton>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              Google Sheets Source
            </Typography>
            <NoMaxWidthTooltip title={sheetsTooltip} placement="right" arrow>
              <SettingsOutlinedIcon />
            </NoMaxWidthTooltip>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <div style={{ color: colors.grey[500] }}>Google Sheets</div>
            <div>.</div>
            <div>Ingests every 5 minutes</div>
          </Box>
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

      {/* snowflake destination */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton
          sx={{
            width: 40,
            height: 40,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: colors.blueAccent[800],
          }}
        >
          <img src="/assets/snowflake.png" height={20} alt="" />
        </IconButton>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              Snowflake Destination
            </Typography>
            <NoMaxWidthTooltip title={snowflakeTooltip} arrow placement="right">
              <SettingsOutlinedIcon />
            </NoMaxWidthTooltip>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <div style={{ color: colors.grey[500] }}>Snowflake</div>
            <div>.</div>
            <div>Loads every 1 day</div>
          </Box>
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

      {/* right buttons */}
      <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          sx={{
            fontWeight: 600,
            color: colors.greenAccent[500],
            background: colors.greenAccent[800],
            px: 1,
            py: '4px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          ACTIVE
        </Typography>
        <Box
          sx={{
            border: '1px solid',
            display: 'grid',
            placeItems: 'center',
            p: '2px',
            borderRadius: '4px',
            cursor: 'pointer',
            borderColor: colors.grey[600],
          }}
        >
          <PauseCircleOutlinedIcon />
        </Box>

        <ClickAwayListener onClickAway={handleClickAway}>
          <Box sx={{ position: 'relative' }}>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
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
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    padding: '12px 20px',
                    '&:hover': {
                      background: colors.grey[700],
                    },
                  }}
                >
                  <BoltOutlinedIcon />
                  <div>Run Now</div>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    padding: '12px 20px',
                    '&:hover': {
                      background: colors.grey[700],
                    },
                  }}
                >
                  <CalendarMonthOutlinedIcon />
                  <div>Change Schedule</div>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    padding: '12px 20px',
                    '&:hover': {
                      background: colors.grey[700],
                    },
                  }}
                >
                  <NotificationImportantOutlinedIcon />
                  <div>Data Spike Alert</div>
                </Box>

                <Box
                  sx={{
                    borderTop: `1px solid ${colors.grey[700]}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: colors.redAccent[500],
                    padding: '12px 20px',
                    '&:hover': {
                      background: colors.grey[700],
                    },
                  }}
                >
                  <DeleteOutlineOutlinedIcon />
                  <div>Delete</div>
                </Box>
              </Box>
            ) : null}
          </Box>
        </ClickAwayListener>
      </Box>
    </Box>
  );
};

export default OverviewTop;
