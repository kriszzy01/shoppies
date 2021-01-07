import React from "react";
import { Banner } from "./components/Banner";
import { Nominations } from "./components/Nominations";
import { Header } from "./components/Header";
import { SearchResults } from "./components/SearchResults";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <div className="content">
          <SearchResults />
          <Nominations />
        </div>
      </main>

      <footer>{/*<p>Made with love by Chris</p>*/}</footer>
    </>
  );
};

export default App;
