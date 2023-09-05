import React, { useState } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineCheck } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const MyToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleToggleCompleted = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <div>
        <h1>My To Do List</h1>
        <Form.Control
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button className="p-2 mt-2 mb-2" onClick={handleAddTask}>
          Aggiungi <AiOutlineCheck />
        </Button>
        <ListGroup className="mt-3">
          {tasks.map((task, index) => (
            <ListGroup.Item className="mt-2" key={index}>
              <Form.Check
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompleted(index)}
              />
              {task.completed && <p>In lavorazione...</p>}
              {task.text}
              <Button
                className="ms-2"
                variant="danger"
                onClick={() => handleDeleteTask(index)}
              >
                Elimina <MdDelete />
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default MyToDoList;
