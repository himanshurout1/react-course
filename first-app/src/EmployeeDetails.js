function EmployeeDetails() {

    function addEmployee() {
        console.log("add employee");
    }

    return (
        <div>
            <form action="index.html" method="post" style={{width: '100%', backgroundColor: 'grey'}}>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="txtName" className="form-label">Name</label>
                    </div>
                    <div className="col-9">
                        <input type="text" className="form-control" name="txtName" id="txtName" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="txtAddress" className="form-label">Address: </label>
                    </div>
                    <div className="col-9">
                        <textarea className="form-control" name="txtAddress" id="txtAddress"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="ddlCity">City:</label>
                    </div>
                    <div className="col-9">
                        <select name="ddlCity" id="ddlCity" className="form-select">
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
                            <input className="form-check-input" type="checkbox" value="" id="aacTypeSavings" />
                                <label className="form-check-label" for="aacTypeSavings">Savings</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value="" id="accTypeCurrent" />
                                <label className="form-check-label" for="accTypeCurrent">Current</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="filePhoto">Photo: </label>
                    </div>
                    <div className="col-9">
                        <input type="file" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <button type="button" className="btn btn-primary" onClick={addEmployee}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EmployeeDetails;