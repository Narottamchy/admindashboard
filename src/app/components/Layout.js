"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import InfoBox from "./InfoBox";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Sidebar from "./Sidebar";
import TopNavBar from "./TopNavbar";

const Layout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  return (
    <>
      <title>Dashboard</title>
      <TopNavBar/>
      <div className="flex bg-neutral-900">
        {/* Sidebar */}
        <div
          className={`fixed left-0 h-full w-64 bg-white ${
            sidebarVisible ? "" : "hidden"
          }`}
        >
          <Sidebar />
        </div>

        {/* Main content */}
        <main
          className={`flex-1 w-0 bg-gray-100 text-black ml-64 ${
            sidebarVisible ? "" : "ml-0"
          }`}
        >
          {/* Button to toggle sidebar visibility */}
          <button
            className={`fixed right-4 bottom-4 md:hidden bg-white p-2 rounded-full shadow-lg`}
            onClick={toggleSidebar}
          >
            {sidebarVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                fillRule="evenodd"
                d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0L16 7.586V7a1 1 0 012 0v6a1 1 0 01-1 1v.586l-4.293-4.293a1 1 0 00-1.414 0L6 14.586V14a1 1 0 112 0v-6a1 1 0 011-1v-.586l4.293 4.293a1 1 0 001.414 0L18 8.414V9a1 1 0 11-2 0V7a1 1 0 011-1v-.586l-4.293 4.293a1 1 0 01-1.414 0L6 6.414V6a1 1 0 112 0v6a1 1 0 01-1 1v.586l-4.293-4.293a1 1 0 00-1.414 0L2 8.414V9a1 1 0 11-2 0V7a1 1 0 011-1v-.586l4.293 4.293a1 1 0 001.414 0L10 2.414V3a1 1 0 011 1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Main content goes here */}
          <div className={`md:block ${sidebarVisible ? "hidden" : ""}`}>
            <Navbar />
            <InfoBox />
            <Form1 />
            <Form2 />
            <div className="flex flex-col lg:flex-row mb-6">
              <div className="w-full lg:w-3/4 lg:mr-2">
                <Form3 />
              </div>
              <div className="w-full lg:w-1/4 lg:ml-2 mt-4 lg:mt-0">
                <Form4 />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
