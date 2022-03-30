import React from 'react';
import ErrorHandler from '../error-handling/ErrorHandler';
import UserListContext from "./UserListContext";

export const LangContext = React.createContext();

function ContextEx() {
    return (
        <LangContext.Provider value="Eng">
            <ErrorHandler>
                <UserListContext />
            </ErrorHandler>
        </LangContext.Provider>
    );
}

export default ContextEx;