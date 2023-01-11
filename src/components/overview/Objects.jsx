import {
  Box,
  Checkbox,
  ClickAwayListener,
  FormControlLabel,
  FormGroup,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { tokens } from '../../theme';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FilterListIcon from '@mui/icons-material/FilterList';
import ReplayIcon from '@mui/icons-material/Replay';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { NoMaxWidthTooltip } from './NoMaxWidthTooltip';
import axios from 'axios';

const objectsData = [
  {
    title: 'Apple daily.Sheet1',
    position: 'Nov 24,2022 22:02:58 MYT',
    eventCount: 236,
    active: true,
    lastIngested: '4 hours ago',
    timeline: [
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 320,
        total: 320,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 252,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
    ],
  },
];

const Objects = ({ barChartTooltip }) => {
  //==============API CALL================
  const [data, setdata] = useState(null);
  useEffect(() => {
    const options = {
      method: 'GET',
      //  url: 'https://asia.hevodata.com/api/public/v2.0/pipelines',
      headers: {
        accept: 'application/json',
        authorization: 'Basic SVBITk9LSUlNUjpaRFJQNTZGN3FaWmY3RGg0SThnbQ==',
      },
    };

    axios
      .get(`/getpipeline`, options)
      .then(function (response) {
        setdata(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(data);
  //=======================================
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [filterOpen, setfilterOpen] = useState(false);
  const [activeObjectFilter, setactiveObjectFilter] = useState('All');
  const [menuopen, setmenuOpen] = useState(false);

  const handlefilterClick = () => {
    setfilterOpen((prev) => !prev);
  };
  const handleMenuClick = () => {
    setmenuOpen((prev) => !prev);
  };

  const handlefilterClickAway = () => {
    setfilterOpen(false);
  };
  const handleMenuClickAway = () => {
    setmenuOpen(false);
  };
  return (
    <>
      {/* objects-header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          alignItems: 'center',
          color: colors.grey[400],
        }}
      >
        <Box sx={{ p: '20px', pb: 0 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <IconButton>
                  <Checkbox
                    sx={{
                      color: colors.grey[500],
                      '&.Mui-checked': {
                        color: colors.blueAccent[500],
                      },
                    }}
                  />
                </IconButton>
              }
              label="Objects (0 of 1)"
            />
          </FormGroup>
        </Box>
        <Typography>Events Ingested</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
            alignItems: 'center',
            color: colors.grey[400],
          }}
        >
          {/* search */}
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <ArrowBackIosNewIcon sx={{ color: colors.grey[500] }} />
          </IconButton>
          <Typography>1 - 1 of 1</Typography>
          <IconButton>
            <ArrowForwardIosIcon sx={{ color: colors.grey[500] }} />
          </IconButton>
          {/* filter */}
          <ClickAwayListener onClickAway={handlefilterClickAway}>
            <Box sx={{ position: 'relative' }}>
              <IconButton onClick={handlefilterClick}>
                <FilterListIcon sx={{ color: colors.grey[300] }} />
              </IconButton>
              {filterOpen ? (
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
                  {[
                    'All',
                    'Active',
                    'Inactive',
                    'Failed',
                    'Has Failed Events',
                    'Needs Mapping',
                  ].map((el, i) => (
                    <Box
                      key={i}
                      onClick={() => setactiveObjectFilter(el)}
                      sx={{
                        padding: '12px 20px',
                        cursor: 'pointer',
                        background:
                          activeObjectFilter === el
                            ? colors.blueAccent[700]
                            : '',
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

          <IconButton>
            <ReplayIcon sx={{ color: colors.grey[300] }} />
          </IconButton>
        </Box>
      </Box>
      {/* object list */}
      {objectsData.map((el, i) => (
        <Box
          key={i}
          sx={{
            pr: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
            backgroundColor: colors.primary[400],
            borderRadius: '5px',
            marginBottom: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <IconButton>
              <Checkbox
                sx={{
                  color: colors.grey[500],
                  '&.Mui-checked': {
                    color: colors.blueAccent[500],
                  },
                }}
              />
            </IconButton>
            <Box>
              <Typography>{el.title}</Typography>
              <small>
                <span style={{ color: colors.grey[300] }}>Position: </span>
                {el.position}
              </small>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
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
              <h2 style={{ margin: 0, color: colors.grey[100] }}>
                {el.eventCount}
              </h2>
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
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Box sx={{ textAlign: 'right' }}>
              <Typography sx={{ color: colors.greenAccent[500] }}>
                {el.active ? 'ACTIVE' : 'INACTIVE'}
              </Typography>
              <small>
                <span style={{ color: colors.grey[300] }}>Last Ingested: </span>
                {el.lastIngested}
              </small>
            </Box>

            <ClickAwayListener onClickAway={handleMenuClickAway}>
              <Box sx={{ position: 'relative' }}>
                <IconButton onClick={handleMenuClick}>
                  <MoreVertIcon />
                </IconButton>
                {menuopen ? (
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
      ))}
    </>
  );
};

export default Objects;
