import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = async term => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 0d11074aad21beed6de3efa48fd3051ade80f08f5f91afecfb3b666d73ff281e"
      }
    });

    console.log(res.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
