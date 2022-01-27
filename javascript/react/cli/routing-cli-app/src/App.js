import { Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Root from "components/Root";
import Video from "components/Video";
import NotFound from "components/NotFound";
import "App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="poke-data" element={<Root />} />
        <Route path="video" element={<Video />}>
          <Route path=":videoId" element={<Video />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
