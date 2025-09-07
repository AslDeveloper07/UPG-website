import React from "react";
import SendMassages from "../../components/Contact/SendMassages";

const Contact = () => {
  return (
    <main className="bg-white dark:bg-[#111] w-full h-[1100px]">
      <div className="container mx-auto relative top-[90px] w-full h-40 ">
        <SendMassages />
      </div>
    </main>
  );
};

export default Contact;
