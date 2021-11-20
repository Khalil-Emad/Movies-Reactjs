import "./todo.css";
import { useState } from "react";

export default function Watch(props) {
    const [list, setTodo] = useState({
        name: props.name,
        complete: false,
    });

    const [complete, setComplete] = useState(true);

    const delet = (id) => {
        if (id > -1) {
            list.name.splice(id, 1);
            setTodo({
                ...list,
                name: props.name,
            });
        }
    };

    const textDoc = (index) => {
        var ele = document.getElementById(index);
        if (complete === true) {
            ele.style.textDecoration = "line-through";
        } else if (complete === false) {
            ele.style.textDecoration = "";
        }
        setComplete(!complete);
    };

    return (
        <>
            <ul className="list-group col-md-8 m-auto mt-3">
                {list.name.map((name, index) => {
                    return (
                        <li className="list-group-item " aria-current="true">
                            <span id={index}>{name}</span>
                            <span id="btns">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => textDoc(index)}
                                >
                                    complete
                                </button>
                                <button
                                    className="btn btn-danger me-1"
                                    onClick={() => delet(index)}
                                >
                                    delete
                                </button>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}