import React from "react";
import { Col, Row } from "antd";

const Entry = ({ title, body, link, score }) => {
  return (
    <Row gutter={16}>
      <Col span={16} offset={4}>
        <Row className="border rounded-lg">
          <Col span={18}>
            <div className="border rounded-lg">
              <div className="px-6 py-4 text-left">
                <div className="font-bold text-xl text-left">{title}</div>
                <div className text-base>
                  {body}
                </div>
                <div>{link}</div>
              </div>
            </div>
          </Col>
          <Col span={6} className="flex items-center justify-center">
            <div className=" text-2xl font-bold ">{score}</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Entry;
