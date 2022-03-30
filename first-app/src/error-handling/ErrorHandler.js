import React from 'react';
class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError : true};
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        return this.state.hasError ? <span>Error loading component: {this.props.compName}</span> : this.props.children;
    }
}

export default ErrorHandler;