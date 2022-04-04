import React, { useRef } from 'react';
import RefChild from './RefChild';
import RefChildFn from './RefChildFn';
function RefEx() {
    const nameRef = useRef<HTMLInputElement>(null);
    const childCompRef = useRef<RefChild>(null);

    function setFocus() {
        nameRef.current?.focus();
        // obj?.x
    }
    function setChildData() {
        childCompRef.current?.updateName("parent data");
    }


    return (
        <div>
            <input type="text" id='txtName' ref={nameRef} />
            <button onClick={setFocus}>Set Focus</button>
            <hr/>
            <RefChild ref={childCompRef}/>
            {/* <RefChildFn ref={childCompRef}/> */}
            <button onClick={setChildData}>Set Child value</button>
        </div>
    );
}

export default RefEx;