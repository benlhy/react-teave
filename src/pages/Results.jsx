import React, { useState, useEffect } from "react";
import Entry from "./Entry";
import { Col, Row, Input, Space } from "antd";

const calculateScore = (weights, inputs) => {
  let value =
    (weights.brewingEase * inputs.brewingEase +
      weights.flavor * inputs.flavor +
      weights.cost * inputs.cost) /
    (weights.brewingEase + weights.flavor + weights.cost);

  value = (Math.round(value * 100) / 100).toFixed(2);

  return value;
};

const safeParseInt = (val) => {
  var num = parseInt(val);
  return isNaN(num) ? 0 : num;
};

const Results = ({ posts }) => {
  const [brewingEase, setBrewingEase] = useState(5);
  const [flavor, setFlavor] = useState(5);
  const [cost, setCost] = useState(5);
  const [data, setData] = useState(posts);

  useEffect(() => {
    console.log({ brewingEase, flavor, cost });
    const dataArray = [...data];

    dataArray.sort(
      (a, b) =>
        calculateScore({ brewingEase, flavor, cost }, b.scores) -
        calculateScore({ brewingEase, flavor, cost }, a.scores)
    );
    setData(dataArray);
  }, [brewingEase, flavor, cost]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Row type="flex" justify="center" align="middle">
        <Col style={{ textAlign: "center", marginBottom: "50px" }}>
          <Space align="center" size="large">
            <Input
              size="large"
              addonBefore="Brewing Ease"
              suffix={`/ ${brewingEase + flavor + cost}`}
              id="brewingEase"
              value={brewingEase}
              placeholder="brewingEase"
              onChange={(event) =>
                setBrewingEase(safeParseInt(event.target.value))
              }
            />

            <Input
              size="large"
              addonBefore="Flavor"
              suffix={`/ ${brewingEase + flavor + cost}`}
              id="flavor"
              value={flavor}
              placeholder="flavor"
              onChange={(event) => setFlavor(safeParseInt(event.target.value))}
            />

            <Input
              size="large"
              addonBefore="Cost"
              suffix={`/ ${brewingEase + flavor + cost}`}
              id="cost"
              value={cost}
              placeholder="cost"
              onChange={(event) => setCost(safeParseInt(event.target.value))}
            />
          </Space>
        </Col>
      </Row>

      {data.map((post) => (
        <Entry
          title={post.title}
          body={post.body}
          long_body={post.long_body}
          link={post.link}
          score={calculateScore({ brewingEase, flavor, cost }, post.scores)}
          img_link={post.img_link}
          package_weight={post.package_weight}
          html_link={post.html_link}
        />
      ))}
    </div>
  );
};

export default Results;
