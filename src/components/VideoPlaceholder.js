import React from 'react';

function VideoPlaceholder({ label = 'Video Placeholder' }) {
  return (
    <div className="video-placeholder">
      {label}
    </div>
  );
}

export default VideoPlaceholder;
