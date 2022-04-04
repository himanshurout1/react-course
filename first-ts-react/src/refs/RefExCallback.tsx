import React from 'react';
function RefExCallback() {
    let nameRef: HTMLInputElement;

    function setFocus() {
        nameRef?.focus();
    }

    function onNodeLoaded(node: HTMLInputElement) {
        nameRef = node;
    }
    return (
        <div>
            <input type="text" id='txtName' ref={onNodeLoaded} />
            <button onClick={setFocus}>Set Focus</button>
        </div>
    );
}

export default RefExCallback;