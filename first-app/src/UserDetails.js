import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, insertUser } from "./apis/userAPI";

function UserDetails(props) {

    const [name, updateName] = useState("");
    const [email, updateEmail] = useState("");
    const [address, updateAddress] = useState("");
    const [city, updateCity] = useState("");
    const [accType, updateAccType] = useState("savings");
    const [userId, setUserId] = useState(11);

    const navigate = useNavigate();

    const routeParams = useParams();

    useEffect(() => {
        if (routeParams.id) {
            getUserById(routeParams.id)
            .then((response) => response.json())
            .then((userDetails) => { 
                console.log(userDetails);
                updateName(userDetails.name);
                updateEmail(userDetails.email);
            });
        }
    }, [routeParams.id]);


    function addUser() {
        const newUserObj = {
            "id": userId,
            "name": name,
            "email": email,
            "address": {
                "street": address,
                "suite": "",
                "city": city,
                "zipcode": ""
            }
        };
        insertUser(newUserObj).then((response) => response.json())
            .then((json) => { 
                console.log(json);
                setUserId(userId + 1);
                resetForm();
                alert("user added successfully");
                navigate("/users");
            });
    }

    function updateuserName(event) {
        updateName(event.target.value);
    }

    function onAccTypeSavingsChange(event) {
        if (event.target.checked) {
            updateAccType("savings");
        }
    }

    function resetForm() {
        updateName("");
        updateEmail("");
        updateAddress("");
        updateCity("");
        updateAccType("savings");
    }


    return (
        <div>

            <form action="index.html" method="post" style={{ width: '100%' }}>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="txtName" className="form-label">Name</label>
                    </div>
                    <div className="col-9">
                        <input type="text" required className="form-control" name="txtName" id="txtName" value={name}
                            onChange={updateuserName}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="txtEmail" className="form-label">Email</label>
                    </div>
                    <div className="col-9">
                        <input type="email" required className="form-control" name="txtEmail" id="txtEmail" value={email}
                            onChange={e => updateEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="txtAddress" className="form-label">Address: </label>
                    </div>
                    <div className="col-9">
                        <textarea className="form-control" name="txtAddress" id="txtAddress" value={address}
                            onChange={e => updateAddress(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="ddlCity">City:</label>
                    </div>
                    <div className="col-9">
                        <select name="ddlCity" id="ddlCity" className="form-select" value={city}
                            onChange={e => updateCity(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="chkAcctype">Account Type:</label>
                    </div>
                    <div className="col-9">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="accType" value="savings" id="aacTypeSavings"
                                checked={accType === 'savings'}
                                onChange={onAccTypeSavingsChange}
                            />
                            <label className="form-check-label" htmlFor="aacTypeSavings">Savings</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="accType" value="current" id="accTypeCurrent"
                                checked={accType === 'current'}
                                onChange={e => e.target.checked && updateAccType("current")}
                            />
                            <label className="form-check-label" htmlFor="accTypeCurrent">Current</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        {
                            !routeParams.id && <button type="button" className="btn btn-primary" onClick={addUser}>Add</button>
                        }
                        {
                            routeParams.id && <button type="button" className="btn btn-primary">Update</button>
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserDetails;