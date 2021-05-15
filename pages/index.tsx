import React from 'react';
import Layout from '../components/Layout/';
import {
  UsersIcon,
  LightningBoltIcon,
  ExternalLinkIcon,
  ClockIcon
} from '@heroicons/react/solid';
import BarChart from '../components/Charts-Apex/BarChart';
import PieChart from '../components/Charts-Apex/PieChart';
import AreaChart from '../components/Charts-Apex/AreaChart';

export default function Home() {
  return (
    <React.Fragment>
      <Layout>
        <div className="w-full h-full flex flex-col">
          <div className="row flex flex-row justify-center items-end h-16 w-full text-lg font-bold">
            DASHBOARD (Apex Charts)
          </div>
          <div className="row mx-2 mt-2 h-20 w-full  flex flex-row">
            <div className="col w-1/4 h-full border bg-white rounded-xl flex flex-row items-center">
              <div className="col flex flex-col w-3/4 ml-4">
                <span className="row">Users</span>
                <span className="row font-bold">588</span>
              </div>
              <UsersIcon width="32" height="32" className="col w-1/4" />
            </div>
            <div className="col w-1/4 h-full border ml-2 bg-white rounded-xl flex flex-row items-center">
              <div className="col flex flex-col w-3/4 ml-4">
                <span className="row">Sessions</span>
                <span className="row font-bold">435</span>
              </div>
              <LightningBoltIcon width="32" height="32" className="col w-1/4" />
            </div>
            <div className="col w-1/4 h-full border ml-2 bg-white rounded-xl flex flex-row items-center">
              <div className="col flex flex-col w-3/4 ml-4">
                <span className="row">Bounce Rate</span>
                <span className="row font-bold">40.5%</span>
              </div>
              <ExternalLinkIcon width="32" height="32" className="col w-1/4" />
            </div>
            <div className="col w-1/4 h-full border ml-2 bg-white rounded-xl flex flex-row items-center">
              <div className="col flex flex-col w-3/4 ml-4">
                <span className="row">Session Duration</span>
                <span className="row font-bold">1m 24s</span>
              </div>
              <ClockIcon width="32" height="32" className="col w-1/4" />
            </div>
          </div>
          <div className="row mx-2 mt-2 h-80 w-full flex flex-row">
            <div className="col w-2/3 h-full border mr-1 bg-white flex flex-col rounded-xl">
              <span className="row text-md ml-2 mt-1">Conversion</span>
              <span className="row text-sm text-gray-500 ml-2">This Year</span>
              <BarChart />
            </div>
            <div className="z-25 col w-1/3 h-full border ml-1 bg-white flex flex-col rounded-xl">
              <span className="row text-md ml-2 mt-1">Sessions</span>
              <span className="row text-sm text-gray-500 ml-2">By Device</span>
              <PieChart />
            </div>
          </div>
          <div className="row bg-white mx-2 mt-2 h-72 w-full border-2 flex flex-col rounded-xl">
            <span className="row text-md ml-2 mt-1">Account Balance</span>
            <span className="row text-sm text-gray-500 ml-2">
              Monthly balance growth and avg. monthly income
            </span>
            <AreaChart />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}
