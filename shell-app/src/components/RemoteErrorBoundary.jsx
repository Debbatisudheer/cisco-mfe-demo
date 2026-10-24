import React from "react";

class RemoteErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Micro-frontend failed:", error);
    console.error("Micro-frontend error details:", errorInfo);
  }

  handleRetry = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "24px",
            borderRadius: "8px",
            background: "#35151a",
            border: "1px solid #8b3038",
            color: "#ffffff",
          }}
        >
          <h3 style={{ marginTop: 0 }}>
            Device Monitoring Unavailable
          </h3>

          <p style={{ color: "#c7d2de" }}>
            The Device Monitoring micro-frontend is currently unavailable.
          </p>

          <button
            onClick={this.handleRetry}
            style={{
              marginTop: "12px",
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              background: "#64ffda",
              color: "#071a2b",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default RemoteErrorBoundary;