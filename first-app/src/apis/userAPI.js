
const baseUserUrl = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => {
    return fetch(baseUserUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}

export const getUserById = (id) => {
    return fetch(baseUserUrl + "/" + id, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}

export const insertUser = (newUserObj) => {
    return fetch(baseUserUrl, {
        method: 'POST',
        body: JSON.stringify(newUserObj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}