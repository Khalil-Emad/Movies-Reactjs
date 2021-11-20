import { useState } from "react";
import Watch from "./watch";
import "./todo.css"

export default function Todo() {
    const [Todo, setTodo] = useState({
        name: "",
    });

    const [Todolist, updateTodo] = useState({
        name: [],
    });

    const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name);
        setTodo({
            ...Todo,
            name: e.target.value,
        });
    };

    const submitAddUser = (e) => {
        Todolist.name.push(Todo.name);
        setTodo({
            ...Todo,
            name: "",
        });
    };

    return (
        <>
            <div className="container">
                <div className="text-lg-left">
                    <form className="col-md-8 text-left m-auto">
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label text-lg-left"
                            >
                                <h6> Add New  </h6>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="todo"
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={(e) => submitAddUser(e)}
                        >
                            Add
                        </button>
                    </form>
                    <Watch name={Todolist.name} />
                </div>
            </div>
        </>
    );
}