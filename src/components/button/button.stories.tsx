import React from "react";
import Button from "./button";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const wrapperStyle: React.CSSProperties = {
  margin: "20px 0",
};

const types = () => (
  <>
    <Button onClick={action("default button clicked")}>默认按钮</Button>
    <Button
      btnType="primary"
      className="test"
      onClick={action("primary button clicked")}
    >
      主要按钮
    </Button>
    <Button btnType="success" onClick={action("success button clicked")}>
      成功按钮
    </Button>
    <Button btnType="warning" onClick={action("warning button clicked")}>
      警告按钮
    </Button>
    <Button btnType="danger" onClick={action("danger button clicked")}>
      危险按钮
    </Button>
    <Button btnType="link" href="https://baidu.com">
      {" "}
      link button{" "}
    </Button>
  </>
);

const size = () => (
  <>
    <div style={wrapperStyle}>
      <Button btnType="primary" size="large">
        large
      </Button>
      <Button btnType="primary" size="normal">
        normal
      </Button>
      <Button btnType="primary" size="small">
        small
      </Button>
      <Button btnType="primary" size="mini">
        mini
      </Button>
    </div>
    <div style={wrapperStyle}>
      <Button size="large">large</Button>
      <Button size="normal">normal</Button>
      <Button size="small">small</Button>
      <Button size="mini">mini</Button>
    </div>
  </>
);

storiesOf("按钮", module).add("按钮类型", types).add("按钮大小", size);
