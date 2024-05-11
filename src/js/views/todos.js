import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Todos = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
          <div>
            <h1>Todos!</h1>
          </div>
          <div>
            <ul className="todo-list">
                {store.todos.map(todo => {
                    return (
                        <li 
                           key={todo.id}
                        >
                           {todo.label}
                        </li>
                    );
                })
             }
            </ul>
          </div>
          <div>
            <Link to="/demo">
              <button>Go to demo page</button>
            </Link>
          </div>
          <div>
            <button onClick={() => actions.getTodos()}>Check console</button>
          </div>
        </>
    );
}