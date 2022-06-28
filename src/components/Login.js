import React from "react";
import UserForm from "./UserForm";

function Login ({
    route,
}) {
    return(
        <UserForm
            buttonText="Log in"
            title="Log In"
            text="Not a member yet? Sign up"
            route={route}
        >
            <input
                type="text"
                className="user-form__input"
                id="email"
                name="email"
                placeholder="Email"
                minLength="2"
                maxLength="40"
                required
              />
              <input
                type="text"
                className="user-form__input"
                id="password"
                name="password"
                placeholder="Password"
                minLength="2"
                maxLength="40"
                required
              />
        </UserForm>
    )
}

export default Login;