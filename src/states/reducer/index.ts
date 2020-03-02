function reducer(state, action) {

  const redux = {
    background: () => {
      const newState = {...state}

      return {count: state + 1}
    },
    border: () => {
      return {count: state + 2}
    },
    colors: () => {
      return {count: state + 2}
    },
    listStyle: () => {
      return {count: state + 2}
    },
    nav: () => {
      return {count: state + 2}
    },
    positions: () => {
      return {count: state + 2}
    },
    shape: () => {
      return {count: state + 2}
    },
    size: () => {
      return {count: state + 2}
    },
    text: () => {
      return {count: state + 2}
    },
    transition: () => {
      return {count: state + 2}
    },
    default: () =>{
      throw new Error()
    }
  }


    return redux[action.type]
  }




  export default reducer