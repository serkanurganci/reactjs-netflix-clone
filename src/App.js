import "./App.css";
import Row from "@/components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h2>Netflix Clone By Serkan</h2>
      <Row
        title="Netflix Originals"
        apiUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" apiUrl={requests.fetchTrending} />
      <Row title="Top Rated" apiUrl={requests.fetchTopRated} />
      <Row title="Action Movies" apiUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" apiUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" apiUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" apiUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" apiUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
