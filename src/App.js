import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="bg-violet-900 min-h-screen">
      {/* Routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
