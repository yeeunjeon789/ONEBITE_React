import React from "react";
import "./App.css";
import MyHeader from "./MyHeader";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  // props
  const counterProps = {
    a: 1,
    b: 2,
    initialValue: 6,
  };

  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
