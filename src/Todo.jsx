import React, { useState } from "react";

const Todo = () => {
    const [state, setState] = useState(0);
    return (
        <div
            style={{
                textAlign: "center",
                padding: "20px",
                border: "2px solid black",
                borderRadius: "10px",
                width: "250px",
                margin: "0 auto", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg,rgb(71, 188, 235),rgb(39, 29, 129),rgb(126, 35, 88))",
                boxShadow: "0 8px 10px rgba(0, 0, 0, 0.2)", 
            }}
        >
            Todo
            <h1>{state}</h1>
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    margin: "5px",
                    backgroundColor: "rgb(68, 6, 168)",
                    color: "white",
                }}
                onClick={() => setState(state + 1)}
            >
                Increment
            </button>
            <br />
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    margin: "5px",
                    backgroundColor: "rgb(0, 0, 0)",
                    color: "white",
                }}
                onClick={() => setState(state - 1)}
            >
                Decrement
            </button>
            <br />
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    margin: "5px",
                    backgroundColor: "rgb(6, 39, 14)",
                    color: "white",
                }}
                onClick={() => setState(0)}
            >
                Reset
            </button>
        </div>
    );
};

export default Todo;