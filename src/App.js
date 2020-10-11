import React from "react";
import "./App.css";
import requests from "./request";
import Row from "./Row";
import Navbar from "./Navbar"
import Banner from "./Banner"

function App() {
  return (
    <div className="App">

      <Navbar />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
      />

      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated Shows " fetchURL={requests.fetchTopRated} />
      <Row title="Action " fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy " fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror and Thriller " fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance " fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
