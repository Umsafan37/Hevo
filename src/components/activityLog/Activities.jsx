import {
  Box,
  ClickAwayListener,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { tokens } from '../../theme';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Activities = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(null);
  const activities = [
    {
      title: (
        <Typography>
          Mapping created for event type <strong>Apple_Daily.Sheet1 </strong>in
          pipeline <span style={{ color: colors.blueAccent[500] }}>#10</span>
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Hevo',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
    {
      title: (
        <Typography>
          Pipeline <span style={{ color: colors.blueAccent[500] }}>#10</span>{' '}
          created
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Shankara sukumaran',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
    {
      title: (
        <Typography>
          Load schedule for destination <strong>Snowflake Destination</strong>{' '}
          is changed to{' '}
          <span style={{ color: colors.blueAccent[500] }}>every 1 day</span>{' '}
          created
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Shankara sukumaran',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
    {
      title: (
        <Typography>
          Mapping created for event type <strong>Apple_Daily.Sheet1 </strong>in
          pipeline <span style={{ color: colors.blueAccent[500] }}>#10</span>
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Hevo',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
    {
      title: (
        <Typography>
          Pipeline <span style={{ color: colors.blueAccent[500] }}>#10</span>{' '}
          created
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Shankara sukumaran',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
    {
      title: (
        <Typography>
          Load schedule for destination <strong>Snowflake Destination</strong>{' '}
          is changed to{' '}
          <span style={{ color: colors.blueAccent[500] }}>every 1 day</span>{' '}
          created
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Shankara sukumaran',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
    {
      title: (
        <Typography>
          Mapping created for event type <strong>Apple_Daily.Sheet1 </strong>in
          pipeline <span style={{ color: colors.blueAccent[500] }}>#10</span>
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Hevo',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
    {
      title: (
        <Typography>
          Pipeline <span style={{ color: colors.blueAccent[500] }}>#10</span>{' '}
          created
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Shankara sukumaran',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
  ];

  const [authorOpen, setauthorOpen] = useState(false);
  const [severityOpen, setseverityOpen] = useState(false);
  const [activeSeverity, setactiveSeverity] = useState('Medium');
  const [activeAuthor, setactiveAuthor] = useState('All');
  return (
    <Box
      sx={{
        my: '24px',
      }}
    >
      {/* topbar */}

      <Box
        sx={{
          padding: '20px 20px 0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* topbar-left */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <h4>Showing Activities in</h4>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              border: `1px solid ${colors.grey[700]}`,
              borderRadius: '4px',
              p: '2px 8px',
              cursor: 'pointer',
              '&:hover': { background: colors.grey[700] },
            }}
          >
            <small>Medium</small>
            <CloseIcon sx={{ width: '16px' }} />
          </Box>
        </Box>

        {/* topbar-right */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
            }}
          >
            <div>CloudWatch Sync Disabled</div>
            <IconButton>
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </Box>
          <Box sx={{ color: colors.grey[400] }}>|</Box>
          <ClickAwayListener onClickAway={() => setauthorOpen(false)}>
            <Box sx={{ position: 'relative' }}>
              <Box
                onClick={() => setauthorOpen(!authorOpen)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  borderRadius: '4px',
                  p: '2px 8px',
                  cursor: 'pointer',
                  '&:hover': { background: colors.grey[700] },
                }}
              >
                <div>Author</div>
                <KeyboardArrowDownIcon />
              </Box>
              {authorOpen ? (
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
                  {['All', 'Shankara Sukumaran', 'Hevo'].map((el, i) => {
                    return (
                      <Box
                        key={i}
                        onClick={() => setactiveAuthor(el)}
                        sx={{
                          cursor: 'pointer',
                          padding: '12px 20px',
                          background:
                            activeAuthor === el ? colors.blueAccent[700] : '',
                          '&:hover': {
                            background: colors.grey[700],
                          },
                        }}
                      >
                        {el}
                      </Box>
                    );
                  })}
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>

          <ClickAwayListener onClickAway={() => setseverityOpen(false)}>
            <Box sx={{ position: 'relative' }}>
              <Box
                onClick={() => setseverityOpen(!severityOpen)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  borderRadius: '4px',
                  p: '2px 8px',
                  cursor: 'pointer',
                  '&:hover': { background: colors.grey[700] },
                }}
              >
                <div>Severity</div>
                <KeyboardArrowDownIcon />
              </Box>
              {severityOpen ? (
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
                  {['Critical', 'High', 'Medium', 'Low'].map((el, i) => {
                    return (
                      <Box
                        key={i}
                        onClick={() => setactiveSeverity(el)}
                        sx={{
                          cursor: 'pointer',
                          padding: '12px 20px',
                          background:
                            activeSeverity === el ? colors.blueAccent[700] : '',
                          '&:hover': {
                            background: colors.grey[700],
                          },
                        }}
                      >
                        {el}
                      </Box>
                    );
                  })}
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>

          <Box sx={{ color: colors.grey[400] }}>|</Box>
          <IconButton>
            <ReplayOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      {activities.map((el, i) => (
        <Box
          key={i}
          sx={{
            p: '10px 16px',
            mb: '1px',
            overFlow: 'hidden',
            background: colors.primary[400],
            borderRadius:
              i === 0
                ? '8px 8px 0 0'
                : i === activities.length - 1
                ? '0 0 8px 8px'
                : '0',
            borderLeft: `4px solid ${
              i % 2 !== 0 ? colors.blueAccent[500] : colors.greenAccent[500]
            }`,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ flex: 3 }}>{el.title}</Typography>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography>
                {el.time}
                <span style={{ color: colors.grey[400], marginLeft: 4 }}>
                  {el.by}
                </span>
              </Typography>
              <KeyboardArrowDownIcon
                onClick={() => setSelected(i !== selected ? i : null)}
                sx={{
                  cursor: 'pointer',
                  rotate: selected === i ? '180deg' : '',
                }}
              />
            </Box>
          </Box>
          {/* expanded */}
          {selected === i && (
            <Box
              sx={{
                p: '10px 20px',
                mt: '10px',
                background: colors.primary[900],
                borderRadius: '8px',
                position: 'relative',
              }}
            >
              <pre>{JSON.stringify(el.log, null, 2)}</pre>

              <IconButton
                onClick={() =>
                  navigator.clipboard.writeText(JSON.stringify(el.log))
                }
                sx={{ position: 'absolute', top: '8px', right: '8px' }}
              >
                <ContentCopyIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Activities;
