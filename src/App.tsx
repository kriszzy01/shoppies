import React from "react";
import { Banner } from "./components/Banner";
import { Nominations } from "./components/Nominations";
import { Searchbar } from "./components/Searchbar";
import { SearchResults } from "./components/SearchResults";

const App: React.FC = () => {
  return (
    <>
      <header>
        <h1 tabIndex={-1}>The Shoppies</h1>
        <Searchbar />
      </header>

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
