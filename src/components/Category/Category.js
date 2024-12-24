import React from 'react';
import VideoCard from '../VideoCard/VideoCard';

const Category = ({ title, videos, onUpdate, onDelete }) => {
  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="video-list">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default Category;
