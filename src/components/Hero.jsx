import React from 'react';
import DashboardTile from './DashboardTile';
import SideBar from './SideBar';

export default function Hero() {
  return (
    <>
      {/* <div className="custom-container"> */}
      <SideBar />
      <div className="main" id="main">
        <h1 className="dashboard-header">Dashboard</h1>
        <div className="row">
          <DashboardTile color="#009688" />
          <DashboardTile color="#2196f3" />
          <DashboardTile color="#3f51b5" />
          <DashboardTile color="#263238" />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
