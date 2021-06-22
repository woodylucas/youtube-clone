import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        {/* Sidebar */}
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
