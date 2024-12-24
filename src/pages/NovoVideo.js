import React, { useState } from 'react';
import { createVideo } from '../services/videoService';

const NovoVideo = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    const newVideo = {
      title,
      category,
      thumbnail,
      videoUrl,
      description
    };
    const createdVideo = await createVideo(newVideo);
    if (createdVideo) {
      alert('Vídeo criado com sucesso!');
      // Limpar o formulário após salvar
      setTitle('');
      setCategory('');
      setThumbnail('');
      setVideoUrl('');
      setDescription('');
    } else {
      alert('Erro ao criar vídeo.');
    }
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setThumbnail('');
    setVideoUrl('');
    setDescription('');
  };

  return (
    <div className="novo-video">
      <h1>Novo Vídeo</h1>
      <form>
        <div>
          <label>Título</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Categoria</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione</option>
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
          <button type="button" onClick={handleClear}>Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default NovoVideo;