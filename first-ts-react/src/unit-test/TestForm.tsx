import React, { useEffect, useState } from 'react';
function TestForm(props?: {val?: string}){

    const [name, setName] = useState("initial value");

    function updateName(val: string) {
        setName(val);
    }

    useEffect(()=> {
        if (props?.val) {
            setName(props?.val);
        }
    }, [props?.val])

    return (
        <div>
            <input type="text" value={name} />
            <button onClick={()=>updateName("updated val")}>Update Value</button>
        </div>
    );
}

export default TestForm;