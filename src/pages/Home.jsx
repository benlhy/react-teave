import React from "react";
import Results from "./Results";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
import { Row, Col, Divider } from "antd";

import posts from "../assets/data/entries.json";

function Home() {
  return (
    <div>
      <div className="text-center text-lg p-10">
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <Row gutter={16}>
          <Col span={8} offset={4}>
            <p className="text-left">
              <b>React-Teave</b> is a tea ranker, based on my perception of how
              good a tea is in various categories, and how much you value each
              category.
            </p>
            <br />
            <p className="text-left">
              Results are organised by weights that <b>you</b> assign below,
              multiplied by the scores I have graded each tea by.
            </p>
            <br />

            <p className="text-left">
              This is a completely subjective experience.
            </p>
          </Col>

          <Col span={8}>
            <Row justify="center">
              <span>
                <h2 className="text-center">Rank of Each Category</h2>
              </span>
            </Row>
            <Divider />

            <Row>
              <Col span={12}>
                <StarFilled style={{ fontSize: "25px" }} />
              </Col>
              <Col offset={2}>Substandard</Col>
            </Row>

            <Row>
              <Col span={12}>
                <StarFilled style={{ fontSize: "25px" }} />
                <StarFilled style={{ fontSize: "25px" }} />
              </Col>
              <Col offset={2}>Below Average</Col>
            </Row>

            <Row>
              <Col span={12}>
                <StarFilled style={{ fontSize: "25px" }} />
                <StarFilled style={{ fontSize: "25px" }} />
                <StarFilled style={{ fontSize: "25px" }} />
              </Col>
              <Col offset={2}>Average</Col>
            </Row>

            <Row>
              <Col span={12}>
                <StarFilled style={{ fontSize: "25px" }} />
                <StarFilled style={{ fontSize: "25px" }} />
                <StarFilled style={{ fontSize: "25px" }} />
                <StarFilled style={{ fontSize: "25px" }} />
              </Col>
              <Col offset={2}>Above Average</Col>
            </Row>

            <Row>
              <Col span={12}>
                <StarFilled style={{ fontSize: "25px" }} />
                <StarFilled style={{ fontSize: "25px" }} />
                <StarFilled style={{ fontSize: "25px" }} />
                <StarFilled style={{ fontSize: "25px" }} />
                <StarFilled style={{ fontSize: "25px" }} />
              </Col>
              <Col offset={2}>Exceptional</Col>
            </Row>
          </Col>
        </Row>

        <br />
        <Results posts={posts} />
      </div>
    </div>
  );
}

export default Home;
