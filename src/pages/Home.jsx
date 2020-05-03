import React from "react";
import Results from "./Results";

import posts from "../assets/data/entries.json";

function Home() {
  return (
    <div>
      <div className="text-center text-lg p-10">
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        🎉 Yay! You got the react starter app running! 🎉
        <br />
        Now you can go to <code>src/pages/Home.jsx</code> and start adding
        useful stuff.
        <Results posts={posts} />
      </div>
    </div>
  );
}

export default Home;
