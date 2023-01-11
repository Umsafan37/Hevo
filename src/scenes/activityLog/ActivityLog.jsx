import React from 'react';
import Activities from '../../components/activityLog/Activities';
import OverviewTop from '../../components/overview/OverviewTop';

const ActivityLog = () => {
  return (
    <div style={{ padding: '20px' }}>
      <OverviewTop />
      <Activities />
    </div>
  );
};

export default ActivityLog;
