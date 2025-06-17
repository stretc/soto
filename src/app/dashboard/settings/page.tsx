import React from "react";
import DashboardNav from "@/components/dashboard-nav";

const page = () => {
  return (
    <>
      <DashboardNav />
      <div className="max-w-2xl space-y-4 mx-6 my-4 lg:mx-8 lg:pl[320px]">
        <h1 className="text-4xl font-semibold tracking-tight">Settings</h1>
      </div>
    </>
  );
};

export default page;
