import { Component } from "react";

import classes from "./App.module.scss";
import { Button } from "@ui";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className={classes.error}>
          <div className={classes.error_content}>
            <h1>Uh of...</h1>
            <p>Something went wrong.. Please try again later...</p>
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
