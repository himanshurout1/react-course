import ErrorHandler from "../error-handling/ErrorHandler";
import { LangContext } from "./ContextEx";
import UserContextComp from "./UserContextComp";

function UserListContext() {
    return (
        <div>
            <LangContext.Consumer>
                {val => <span>Lang at child: {val}</span>}
            </LangContext.Consumer>
            <div>List of Users</div>
            <ErrorHandler compName="User Detail">
                <UserContextComp />
            </ErrorHandler>
        </div>
    );
}

export default UserListContext;