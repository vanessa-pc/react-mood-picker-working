import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("happy");

  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewMoodValue("happy");
  };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue("confused");
  };

  const handleMoodChangeToSad = () => {
    queueRerenderWithNewMoodValue("sad");
  };

  const handleMoodChangeToTired = () => queueRerenderWithNewMoodValue("tired");

  const handleMoodChangeToReady = () => queueRerenderWithNewMoodValue("ready");

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button> <br />
      <button onClick={handleMoodChangeToConfused}>🤔</button> <br />
      <button onClick={handleMoodChangeToSad}>😢</button> <br />
      <br />
      <button onClick={() => queueRerenderWithNewMoodValue("laughing")}>
        🤣
      </button>
      <button onClick={handleMoodChangeToTired}>😴</button>
      <button onClick={handleMoodChangeToReady}>😎</button>
    </>
  );
}

export default MoodPickerDemo;
