import "./App.css";
import Row from "@/components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row title="NetflixOriginals" apiUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
