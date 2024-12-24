import React, { useState } from 'react';
import { updateVideo } from '../../services/videoService';

const Modal = ({ video, onClose, onUpdate }) => {
  const [title, setTitle] = useState(video.title);
  const [category, setCategory] = useState(video.category);
  const [thumbnail, setThumbnail] = useState(video.thumbnail);
  const [videoUrl, setVideoUrl] = useState(video.videoUrl);
  const [description, setDescription] = useState(video.description);

  const handleSave = async () => {
    const updatedVideo = {
      ...video,
      title,
      category,
      thumbnail,
      videoUrl,
      description
    };
    const result = await updateVideo(updatedVideo);
    if (result) {
      onUpdate(result);
      onClose();
    } else {
      alert('Erro ao atualizar vídeo.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Card</h2>
        <form>
          <div>
            <label>Título</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Categoria</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="inovacao">Inovação</option>
              <option value="gestao">Gestão</option>
            </select>
          </div>
          <div>
            <label>Imagem</label>
            <input type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
          </div>
          <div>
            <label>Vídeo</label>
            <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
          </div>
          <div>
            <label>Descrição</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div>
            <button type="button" onClick={handleSave}>Salvar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;