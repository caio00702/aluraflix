import React from "react";
import "./Category.css";

function Category({ title }) {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Video 2",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Video 3",
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="category">
      <h2> {title} </h2>
      <div className="category-videos">
        {" "}
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <h3> {video.title} </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
