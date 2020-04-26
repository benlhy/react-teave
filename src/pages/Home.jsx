import React from "react";
import Entry from "./Entry";

const post1 = {
  title: "Adagio Jasmine",
  body: "It is a v good tea",
  date: "2019",
  scores: {
    brewingEase: 5,
    flavor: 4,
    cost: 5,
  },
};

const weights = {
  brewingEase: 0,
  flavor: 9,
  cost: 9,
};

const calculateScore = (weights, inputs) => {
  let value =
    (weights.brewingEase * inputs.brewingEase +
      weights.flavor * inputs.flavor +
      weights.cost * inputs.cost) /
    (weights.brewingEase + weights.flavor + weights.cost);

  value = (Math.round(value * 100) / 100).toFixed(2);

  return value;
};

function Home() {
  return (
    <div>
      <div className="text-center text-lg p-10">
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        🎉 Yay! You got the react starter app running! 🎉
        <br />
        Now you can go to <code>src/pages/Home.jsx</code> and start adding
        useful stuff.
        <Entry
          title={post1.title}
          body={post1.body}
          score={calculateScore(weights, post1.scores)}
        />
        <Entry title={post1.title} body={post1.body} score={3.5} />
        <Entry title={post1.title} body={post1.body} score={3.6} />
      </div>
    </div>
  );
}

export default Home;
