import React from 'react';


function Consultants(props: any) {
    const consultants: any[] = props.list || [];
    return (
        <div>
            <div>Number of consultants: {consultants.length}</div>
            <div>
                {
                    consultants.map((con, i) =>
                        <div key={"con" + i.toString()} className="con-row">
                            <div>{con.name}</div>
                            <div>{con.email}</div>
                            <div>{con.address}</div>
                            <div>{con.city}</div>
                            <div>{con.accType}</div>
                            <div>
                                <button type='button'>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Consultants;