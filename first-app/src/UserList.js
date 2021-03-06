import { useEffect, useState } from 'react';
import './App.css';
import { getUsers } from './apis/userAPI';

function UserList(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // make api call & set users
        getUsers().then(response => response.json())
            .then(response => {
                setUsers(response);
            });
    }, []);

    return (
        <div>
            <div>
                Number of users: {users.length}
                <a href='#/users/new' style={{marginLeft: '20px'}}>New User</a>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Street</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={"user" + i.toString()}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.street}</td>
                                    <td>{user.address.city}</td>
                                    <td>
                                        <a href={'#/users/' + user.id} style={{marginLeft: '20px'}}>Edit</a>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
           
        </div>
    )
}

export default UserList;