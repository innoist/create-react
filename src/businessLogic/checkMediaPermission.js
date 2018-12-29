import { useState, useEffect } from "react";

export default function hasMediaPermission(props) {
  const [hasPermission, setPrmission] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
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
        if (!hasPermission) setPrmission(true);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return hasPermission;
}
