import styled from "@emotion/styled";

const Nav = styled.nav({
  height: "auto",
  maxHeight: '75vh',
  width: "75px",
  background: "black",
  color: "white"
});

const Ul = styled.ul({
  height: "100%",
  width: "100%",
  margin: 0,
  padding: 0,
});

const Li = styled.li({
  height: "8vh",
  width: "75px",
  listStyle: "none",
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  transition: '0.5s all',
  ":hover, :focus": {
    background: 'white',
    color: 'black',
    cursor: 'pointer'
  },
});

export { Nav, Ul, Li };
