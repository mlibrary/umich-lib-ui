import React from "react";
import Alert from "../src/index";

export let name = "All";

export let Example = () => (
  <div className="y-spacing">
    <Alert>Nothing special.</Alert>
    <Alert intent="success">You did it!</Alert>
    <Alert intent="informational">Did you know?</Alert>
    <Alert intent="warning">Don't do it!</Alert>
    <Alert intent="error">It's too late.</Alert>
  </div>
)