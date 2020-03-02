import Colors from "./colors";
import Position from "./positions";
import Size from "./size";
import Text from "./text";
import Transition from "./transition";
import Background from "./background";
import Border from "./border";
import Shape from "./shape";




const navbar = [
  { title: "colors", component: Colors, isActive: true, thumbmail: '' },
  { title: "position", component: Position, isActive: true },
  { title: "size", component: Size, isActive: true },
  { title: "text", component: Text, isActive: true },
  { title: "transition", component: Transition, isActive: true },
  { title: "border", component: Border, isActive: true },
  { title: "shape", component: Shape, isActive: true },
];

const section = [
    
]
const routes = {
  navbar,
  section: {
    Colors,
    Position,
    Size,
    Text,
    Transition,
    Background,
    Border,
    Shape
  }
};

export default routes;

