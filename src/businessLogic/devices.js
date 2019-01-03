import React, { useState, useEffect } from "react";

export default function devices(props) {
  // useEffect(() => {

  // });
  const [audioList, setAudioList] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [speakerList, setSpeakerList] = useState([]);

  useEffect(() => {
    updateDeviceList();
    navigator.mediaDevices.ondevicechange = function(event) {
      updateDeviceList();
    };
  }, []);

  function updateDeviceList() {
    navigator.mediaDevices.enumerateDevices().then(function(devices) {
      devices.forEach(function(device) {
        // let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);
        if (device.kind === "audioinput") {
          // audioList.appendChild(elem);
          let al = audioList;
          al.push(device.label + " ----(" + device.deviceId + ")");
          setAudioList(al);
        } else if (device.kind === "videoinput") {
          let vl = videoList;
          vl.push(device.label + " ---(" + device.deviceId + ")");
          setVideoList(vl);
          // videoList.appendChild(elem);
        } else if (device.kind === "audiooutput") {
          let sl = speakerList;
          sl.push(device.label + " ---(" + device.deviceId + ")");
          setSpeakerList(sl);
          // videoList.appendChild(elem);
        }
      });
    });
  }
  console.log("audioList", audioList);
  console.log("videoList", videoList);
  return (
    <div>
      <div>audioList</div>
      {audioList.map(x => (
        <div>{x}</div>
      ))}
      <br />
      <div>VideoList</div>
      {videoList.map(x => (
        <div>{x}</div>
      ))}
      <br />
      <div>Speaker List</div>
      {speakerList.map(x => (
        <div>{x}</div>
      ))}
    </div>
  );
}
