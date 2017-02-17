import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "js/Root";

const rootEl = document.getElementById("app");
ReactDOM.render(<Root name="Michal" />, rootEl);

require("css/main.scss");
require("file-loader?name=[name].[ext]!index.html");
