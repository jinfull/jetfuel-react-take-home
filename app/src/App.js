import React from 'react';
// import logo from './logo.svg';
import './styling/App.css';
import CampaignItem from './CampaignItem';
import CampaignList from './CampaignList';


function App() {
  return (
      <div>
        <CampaignItem />
        <CampaignList />
      </div>
    );
}

export default App;
