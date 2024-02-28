import React from "react";
import { UserButton } from "@clerk/nextjs";

const Page = () => {
  return (
    <div>
      <p>home</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Page;
