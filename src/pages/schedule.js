import React from "react";
import TopBar from "../components/TopBar/TopBar";

const Schedule = () => {
  return (
    <div>
      <TopBar />
      <h2 className="accent">Schedule</h2>
      <iframe src= "https://calendar.google.com/calendar/embed?src=c_jvkv9bu7qkpcnenmsdj8d8mcnc%40group.calendar.google.com&ctz=America%2FNew_York" title="DFA at CMU Google Calendar" width="100%" height="800" frameborder="0" scrolling="no"></iframe>
      <div style={{marginBottom: "72px"}}></div>
    </div>
  )
};

export default Schedule;