import React from "react"

export default class ErrorBoundary extends React.Component {
 
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });

    // You can also log the error to an error tracking service
    // or perform any other necessary error handling steps.
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI or error message
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Component Stack Error Details:</p>
          <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
        </div>
      );
    }

    // Render children if no error occurred
    return this.props.children;
  }
}
