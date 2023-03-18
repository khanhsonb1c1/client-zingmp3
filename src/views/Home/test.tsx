import React, { useState } from "react";
import PropTypes from "prop-types";

test.propTypes = {};

function test() {
  const [count, setCount] = useState(1);

  const decrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={decrease}>decrease</button>
      <p className="text-primary">{count}</p>
    </div>
  );
}

export default test;
