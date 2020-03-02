import React, { ReactElement } from "react";
import { createPortal } from "react-dom";
interface Props {}

const Index = (
  { PreviewDiv, SecondDiv, ThirdDiv }: any,
  { components }: any
) => {
  return ({}: Props): ReactElement => {
    const Navbar = components[0].component;
    const Home = components[1].component
    console.log(Home)
    const dom = <div>
      <Navbar />
    </div>;

    const element = document.getElementById("portalViewer");

    return createPortal(dom, element);
  };
};

export default Index;
