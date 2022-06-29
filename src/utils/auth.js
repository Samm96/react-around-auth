const BASE_URL = "https://register.nomoreparties.co";

export const register = ({ email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.error) {
            throw new Error(data.error);
        }
        console.log(data)
    })
    .catch((res) => {
            res.status(400).send({ message: "One of the fields was filled in incorrectly"});
    });
}

export const login = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            return data;
        } else {
            return;
        }
    })
    .catch((data, res) => {
        if (!data.jwt) {
            res.status(401).send({ message: "The user with the specified email not found"})
        } else {
            res.status(400).send({ message: "One or more of the fields were not provided"})
        }
    })
}

export const checkToken = ({ email }) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
        },
        body: JSON.stringify({ email }),
    })
    .then((res) => res.json())
    .then((data, res) => {
        if (data.jwt) {
            return data;
        } else {
            res.status(400).send({ message: "Token not provided or provided in wrong format"});
        }
        })
    .catch((res) => {
        res.status(401).send({ message: "The provided token is invalid"})
    })
    }
