"use client"
import React from "react";
import Dialog from "@components/Dialog";

const testPage = () => {
  const onOk = async () => {

    console.log("Modal has opened");
  };

  const onClose = async () => {

    console.log("Modal has closed");
  };

  const handleSubmit = () => {
    console.log("submitted");
  }
  return (
    <>
      <Dialog title="Examlpe Modal" onClose={onClose} onOk={onOk}>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email" />    
        <button>Submit</button>
     </form>
      </Dialog>

      <h1>THIS IS THE TEST PAGE</h1>
      <p>
        If the dialog is open , it sets the "dialog" URL search
        parameter to true using setSearchParams. This is a way to track the
        dialog's state in the URL. It adds an event listener for the "mousedown"
        event on the document to detect clicks outside the dialog. If a click is
        detected outside the dialog, the dialog is closed by setting isOpen to
        false. When the dialog is closed, it removes the "dialog" URL search
        parameter and the event listener. The return statement in this useEffect
        specifies a cleanup function that removes the event listener when the
        component unmounts.
      </p>
    </>
  );
};

export default testPage;
