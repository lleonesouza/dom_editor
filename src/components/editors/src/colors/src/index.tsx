import React, { ReactElement, useState } from "react";

const editor = ({ ChromePicker }: any) => {
  return ({
    color = { color: { r: 51, g: 51, b: 51 } },
    setColor
  }: any): ReactElement => {

    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const ColorChangeHandler = (color: any) => setColor( color.rgb );


    return (
      <div>
          <button onClick={() => setDisplayColorPicker(!displayColorPicker)}> Open Color Picker </button>

        {displayColorPicker ?   <ChromePicker color={color} onChange={ColorChangeHandler} /> : null}
        
      </div>
    );
  };
};

export default editor;
