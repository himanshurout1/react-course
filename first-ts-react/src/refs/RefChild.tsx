import React, { useState } from 'react';
class RefChild extends React.Component<any, {name: string}> {

    // const [name, setName] = useState("initial value");

    constructor(props: any) {
        super(props);
        this.state = {name: "initial value"}
    }

    updateName(val: string) {
        this.setState({name:val});
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} />
            </div>
        );
    }
}

export default RefChild;