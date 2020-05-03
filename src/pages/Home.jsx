import React from "react";
import Results from "./Results";

const post1 = {
  title: "Adagio Jasmine",
  body: "It is a v good tea",
  date: "2019",
  scores: {
    brewingEase: 4,
    flavor: 4,
    cost: 5,
  },
};

const post2 = {
  title: "Entry2",
  body: "It is a v good tea",
  date: "2019",
  scores: {
    brewingEase: 5,
    flavor: 4,
    cost: 4,
  },
};

const post3 = {
  title: "Entry3",
  body: "It is a v good tea",
  date: "2019",
  scores: {
    brewingEase: 2,
    flavor: 4,
    cost: 5,
  },
};

var posts = [post1, post2, post3];

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
