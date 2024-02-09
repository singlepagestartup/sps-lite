import React, { useState } from "react";

// According to MDN
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState#value
const HAVE_FUTURE_DATA = 3;

const VideoPreview = ({ url, mime, className = "" }) => {
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = (e) => {
    if (e.target.currentTime > 0) {
      const video = e.target;
      const canvas = document.createElement("canvas");

      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

      video.replaceWith(canvas);

      setDuration(video.duration);
      canvas.setAttribute("class", className);
    }
  };

  const handleThumbnailVisibility = (e) => {
    const video = e.target;

    if (video.readyState < HAVE_FUTURE_DATA) return;

    video.play();
  };

  return (
    <>
      <video
        muted
        onLoadedData={handleThumbnailVisibility}
        src={url}
        className={className}
        onTimeUpdate={handleTimeUpdate}
      >
        <source type={mime} />
      </video>
      <span className="absolute bottom-1 right-1 text-white bg-zinc-900 text-xs px-1 rounded-lg">
        {duration ? formatDuration(duration) : null}
      </span>
    </>
  );
};

export default VideoPreview;

const formatDuration = (durationInSecond) => {
  const formatter = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const date = new Date(1970, 0, 1);
  date.setSeconds(durationInSecond);

  return formatter.format(date);
};
