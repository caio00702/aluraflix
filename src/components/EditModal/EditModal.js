import React from 'react';

const EditModal = ({ video, onClose }) => {
  const handleSave = () => {
    // lógica para salvar as alterações
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Vídeo</h2>
        <input type="text" defaultValue={video.title} />
        <button onClick={handleSave}>Salvar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default EditModal;