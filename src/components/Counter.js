import React, { useState, useEffect } from "react";
import * as bootstrap from "react-bootstrap";
const Counter = (props) => {
  let [count, setCount] = useState(props.count);

  useEffect(() => {
    setCount(props.count);
  }, [props]);

  return (
    <bootstrap.Container fluid="xxl">
      <bootstrap.Row>
        
        <bootstrap.Col>
          <h1 style={{marginLeft:'35%', paddingBottom:'30%'}}>My First Counter App</h1>
        </bootstrap.Col>
      </bootstrap.Row>

      <bootstrap.Row>
   
        <bootstrap.Col>
        <div className="d-grid gap-2">
          <bootstrap.Button
            variant="primary"
            size="lg"
            onClick={() => props.countOne(1)}
          >
            {" "}
            +{" "}
          </bootstrap.Button>
         </div>
        </bootstrap.Col>
        <bootstrap.Col>
          <h1 style={{marginLeft:'50%'}}>{count}</h1>
        </bootstrap.Col>

        <bootstrap.Col>
        <div className="d-grid gap-2">
          <bootstrap.Button
          size="lg"
            disabled={!count}
            onClick={() => props.countDown(1)}
          >
            {" "}
            -{" "}
          </bootstrap.Button>
          </div>
        </bootstrap.Col>
      
      </bootstrap.Row>

      <bootstrap.Row>
        <bootstrap.Col>
        <div className="d-grid gap-2">
          <bootstrap.Button
            variant="danger"
            disabled={!count}
            onDoubleClick={props.reset}
          >
            Reset
          </bootstrap.Button>
        </div>
        </bootstrap.Col>
        
      </bootstrap.Row>
    </bootstrap.Container>
  );
};

export default Counter;
