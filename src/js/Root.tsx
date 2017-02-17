import * as React from "react";
import Greeting from "js/Greeting";
import Logo from "js/Logo";

const Root = ({name}: {name: string}) =>
  <div>
    <Logo />
    <Greeting name={name}/>
  </div>;

export default Root;
