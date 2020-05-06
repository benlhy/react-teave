import React from "react";
import { Col, Row, Button, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const Entry = ({ title, body, link, score, long_body }) => {
  const [showBody, setShowBody] = React.useState(false);
  const [hoverStyle, setHoverStyle] = React.useState(false);

  const onClick = () => setShowBody(!showBody);

  const mouseEnter = () => setHoverStyle(true);
  const mouseExit = () => setHoverStyle(false);

  return (
    <Row gutter={16} style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Col span={16} offset={4}>
        <Row
          className={`${
            hoverStyle
              ? "border-solid border-blue-300 shadow "
              : "border-solid "
          } border rounded-lg`}
          onClick={onClick}
          onMouseOver={mouseEnter}
          onMouseLeave={mouseExit}
        >
          <Col span={18}>
            <div className="rounded-lg">
              <div className="px-6 py-4 text-left">
                <Row>
                  <Col span={18}>
                    <div className="font-bold text-xl text-left">{title}</div>
                  </Col>

                  <Col span={6}>
                    <div className="text-right">
                      <Button type="link">{showBody ? "Less" : "More"}</Button>
                    </div>
                  </Col>
                </Row>
                <Divider />

                <div className text-base>
                  <i>{body}</i>
                </div>
                <br />
                <div>{showBody ? long_body : null}</div>

                <div>{link}</div>
              </div>
            </div>
          </Col>
          <Col span={1}>
            <div className="flex items-center h-full">
              <Divider type="vertical" style={{ height: "90%" }} />
            </div>
          </Col>

          <Col span={5} className="flex items-center justify-center">
            <div className=" text-2xl font-bold ">{score}</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Entry;
