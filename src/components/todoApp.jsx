import React, { useState, useRef } from "react";
import { Image, Form, Button, ListGroup } from "react-bootstrap";
import "../styles/todo.css";

function TodoTask(props) {
  const [isComplated, setIsComplated] = useState(false);
  function clickHandler() {
    setIsComplated(true);
  }

  if (isComplated) {
    return null;
  }

  return (
    <>
      <ListGroup.Item className="todo-task">
        {props.text}
        <Image
          src="https://i.vippng.com/png/small/212-2123323_black-check-mark-logo-bed-mattress-sale-orange.png"
          alt="tickmark"
          className="complated-icon"
          onClick={clickHandler}
          thumbnail
        ></Image>
      </ListGroup.Item>
    </>
  );
}

function TodoApp() {
  const inputRef = useRef();
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function inputChangeHandler(event) {
    setText(event.target.value);
  }

  function submitHandler(event) {
    if (text) {
      setList(list.concat(text));
    }

    setText("");
    inputRef.current.value = "";
    event.preventDefault();
  }

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Control
            onChange={inputChangeHandler}
            type="text"
            ref={inputRef}
            className="todo-input"
            placeholder="Enter your task"
          ></Form.Control>
          <Button
            onClick={submitHandler}
            variant="primary"
            className="todo-submit-btn"
          >
            Add Item
          </Button>
        </Form.Group>
      </Form>

      <ListGroup>
        {list.map((element) => (
          <TodoTask text={element} key={element} />
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoApp;
