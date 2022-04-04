import React, { useState } from 'react';
function RefChildFn(){

    const [name, setName] = useState("initial value");

    function updateName(val: string) {
        setName(val);
    }

    return (
        <div>
            <input type="text" value={name} />
        </div>
    );
}

export default RefChildFn;