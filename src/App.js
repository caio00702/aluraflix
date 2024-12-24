import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import NovoVideo from "./pages/NovoVideo";
import { getVideos } from "./services/videoService";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videosData = await getVideos();
      setVideos(videosData);
    };

    fetchVideos();
  }, []);

  const handleUpdate = (updatedVideo) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
  };

  const handleDelete = (id) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };

  const frontendVideos = videos.filter(video => video.category === 'frontend');
  const backendVideos = videos.filter(video => video.category === 'backend');
  const inovacaoVideos = videos.filter(video => video.category === 'inovacao');
  const gestaoVideos = videos.filter(video => video.category === 'gestao');

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Banner />
          <Category title="Frontend" videos={frontendVideos} onUpdate={handleUpdate} onDelete={handleDelete} />
          <Category title="Backend" videos={backendVideos} onUpdate={handleUpdate} onDelete={handleDelete} />
          <Category title="Inovação" videos={inovacaoVideos} onUpdate={handleUpdate} onDelete={handleDelete} />
          <Category title="Gestão" videos={gestaoVideos} onUpdate={handleUpdate} onDelete={handleDelete} />
        </Route>
        <Route path="/novo-video">
          <NovoVideo />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
