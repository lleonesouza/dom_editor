interface navbar {
    options: [];
    style: {
      positionEditor: {
        position: "fixed || absolute || static";
        top: number;
        bottom: number;
        right: number;
        left: number;
      };
      textEditor: {
        textSide: string;
        color: string;
        fontFamily: string;
        letterSpacing: string;
      };
      backgroundEditor: {
        backgroundUrl: string;
      };
      transitionEditor: {
        transition: string;
      };
      borderEditor: {
        border: string;
        borderRadius: string;
      };
      sizeEditor: {
        height: string;
        width: string;
      };
      zIndex: number;
    };
}

export default navbar;
