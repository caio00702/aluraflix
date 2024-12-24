import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { deleteVideo } from '../../services/videoService';

const VideoCard = ({ video, onUpdate, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteClick = async () => {
    const success = await deleteVideo(video.id);
    if (success) {
      onDelete(video.id);
    } else {
      alert('Erro ao excluir vídeo.');
    }
  };

  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
      <button onClick={handleEditClick}>Editar</button>
      <button onClick={handleDeleteClick}>Excluir</button>
      {isModalOpen && <Modal video={video} onClose={() => setIsModalOpen(false)} onUpdate={onUpdate} />}
    </div>
  );
};

export default VideoCard;