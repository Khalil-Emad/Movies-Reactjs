import { useState } from "react";
export default function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [userErrors, setUserErrors] = useState({
        name: null,
        email: null,
        username: null,
        password: null,
        confirmPassword: null,
    });

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });

        switch (e.target.name) {
            case "name":
                setUserErrors({
                    ...userErrors,
                    name:
                        e.target.value.length === 0
                            ? "Name is required"
                            : null,
                });
                break;
            case "email":
                setUserErrors({
                    ...userErrors,
                    email: e.target.value.length === 0 ? "Email is required" : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(e.target.value)
                        ? "Email Address is invalid"
                        : null,
                });
                break;
            case "username":
                setUserErrors({
                    ...userErrors,
                    username:
                        e.target.value.length === 0
                            ? "This field is required"
                            : !/^\S+$/i.test(e.target.value)
                                ? "username must contain no space"
                                : null,
                });
                break;
            case "password":
                setUserErrors({
                    ...userErrors,
                    password:
                        e.target.value.length === 0
                            ? "This field is required"
                            : e.target.value.length < 8
                                ? "Min length is 8 characters"
                                : !/^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(e.target.value)
                                    ? "Password is invalid"
                                    : null,
                });
                break;
            case "confirmPassword":
                setUserErrors({
                    ...userErrors,
                    confirmPassword:
                        e.target.value.length === 0
                            ? "This field is required"
                            : e.target.value !== user.password
                                ? "Password doesnot match"
                                : null,
                });
                break;
            default:
                break;
        }
    };

    const submitRegister = (e) => {
        e.preventDefault();
        if (!userErrors.name && !userErrors.email && !userErrors.username && !userErrors.password && !userErrors.confirmPassword) {
            console.log(user);
        }
    };

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={(e) => submitRegister(e)}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${userErrors.name ? "border-danger" : ""
                            }`}
                        id="formGroupExampleInput"
                        placeholder="name"
                        value={user.name}
                        name="name"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <small className="text-danger">{userErrors.name}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">
                        Email Address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="email"
                        value={user.email}
                        name="email"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <small className="text-danger">{userErrors.email}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">
                        User Name
                    </label>
                    <input
                        type="Text"
                        className="form-control"
                        id="formGroupExampleInput3"
                        placeholder="username"
                        value={user.username}
                        name="username"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <small className="text-danger">{userErrors.username}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="formGroupExampleInput4"
                        placeholder="password"
                        value={user.password}
                        name="password"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <small className="text-danger">{userErrors.password}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput5" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="formGroupExampleInput5"
                        placeholder="confirmPassword"
                        value={user.confirmPassword}
                        name="confirmPassword"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <small className="text-danger">{userErrors.confirmPassword}</small>
                </div>
                <button type="submit" className="btn btn-success">
                    Register
                </button>
            </form>
        </>
    );
}
