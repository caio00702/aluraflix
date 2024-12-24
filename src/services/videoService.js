import axios from 'axios';

const API_URL = 'http://localhost:3000/videos';

export const getVideos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar vídeos:', error);
    return [];
  }
};

export const createVideo = async (video) => {
  try {
    const response = await axios.post(API_URL, video);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar vídeo:', error);
    return null;
  }
};

export const updateVideo = async (video) => {
  try {
    const response = await axios.put(`${API_URL}/${video.id}`, video);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar vídeo:', error);
    return null;
  }
};

export const deleteVideo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error('Erro ao excluir vídeo:', error);
    return false;
  }
};