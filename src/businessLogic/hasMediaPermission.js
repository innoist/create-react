import React, { useState, useEffect } from "react";
import { CamAndMicPermissions } from "./enums";
import { Button, Container, Image, Progress } from "semantic-ui-react";
import hark from "hark";

import videoCamera from "../images/videoCamera.svg";

export default function hasMediaPermission(props) {
  const [micPermission, setMicrophonePermission] = useState("");
  const [camPermission, setCameraPermission] = useState("");
  const [stream, setStream] = useState(null);

  const [micLevel, setMicLevel] = useState(0);
  useEffect(() => {
    console.log("Permissionssss");
    navigator.permissions
      .query({ name: "camera" })
      .then(permissionObj => {
        console.log("Permission ", permissionObj.state);
        setCameraPermission(permissionObj.state);
      })
      .catch(error => {
        console.log("Got error :", error);
      });
    navigator.permissions
      .query({ name: "microphone" })
      .then(permissionObj => {
        console.log("Permission ", permissionObj.state);
        setMicrophonePermission(permissionObj.state);
      })
      .catch(error => {
        console.log("Got error :", error);
      });
  }, []);

  let askPermissionFromUser = () => {
    const constraints = { audio: true, video: true };
    const getUserMedia = params =>
      new Promise((successCallback, errorCallback) => {
        navigator.webkitGetUserMedia.call(
          navigator,
          params,
          successCallback,
          errorCallback
        );
      });
    getUserMedia(constraints)
      .then(stream => {
        setCameraPermission(true);
        setMicrophonePermission(true);
        const video = document.querySelector("video");
        const vendorURL = window.URL || window.webkitURL;

        var options = {};
        video.srcObject = stream;
        setStream(stream);
        var speechEvents = hark(stream, options);
        speechEvents.on("speaking", function() {
          console.log("speaking");
        });

        speechEvents.on("stopped_speaking", function() {
          console.log("stopped_speaking");
        });
        speechEvents.on("volume_change", function(e, d) {
          console.log("volume_change ", e, d);
          setMicLevel(50 + e);
        });
        video.play();
      })
      .catch(err => {
        console.log(err);
      });
  };

  var HTMLToRender = "";

  if (
    camPermission == CamAndMicPermissions.prompt ||
    micPermission == CamAndMicPermissions.prompt
  ) {
    HTMLToRender = (
      <Container>
        <Image src={videoCamera} bordered size="medium" />
        <Button onClick={askPermissionFromUser}>Enable Cam</Button>
      </Container>
    );
  } else if (
    camPermission === CamAndMicPermissions.granted &&
    micPermission === CamAndMicPermissions.granted
  ) {
  }

  return (
    <div>
      <div>Camera Allow : {camPermission.toString()}</div>
      <div>Microphone Allow : {micPermission.toString()}</div>
      {HTMLToRender}
      <video id="video" />
      <Progress percent={micLevel} />
    </div>
  );
}
