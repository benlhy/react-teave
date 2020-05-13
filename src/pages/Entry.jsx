import React from "react";
import { Col, Row, Button, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const Entry = ({
  title,
  body,
  link,
  score,
  long_body,
  img_link,
  html_link,
  package_weight,
}) => {
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
                      <Button type="link" onClick={onClick}>
                        {showBody ? "Less" : "More"}
                      </Button>
                    </div>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col span={6}>
                    <div className="  ">
                      <img
                        className="h-32 w-full rounded object-scale-down"
                        src={process.env.PUBLIC_URL + "/img/" + img_link}
                        alt="tea"
                      />
                    </div>
                  </Col>
                  <Col span={18}>
                    <div className="flex flex-col justify-center pl-2 h-full">
                      <div className="align-right w-full">
                        <i>{body}</i>
                      </div>
                      <br />

                      <div className="font-semibold text-sm pt-3">
                        {package_weight} | <a href={html_link}>{html_link}</a>
                      </div>
                    </div>
                    <br />
                  </Col>
                </Row>

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
