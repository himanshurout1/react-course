import React from "react";
import { LangContext } from "./ContextEx";
import '../User.css';

function UserContextComp() {
    const lang = React.useContext(LangContext);
    return (
        <div>
            <div className="user-info-header">User information</div>
            <span>Lang at sub child: {lang}</span>
        </div>
    );
}

export default UserContextComp;