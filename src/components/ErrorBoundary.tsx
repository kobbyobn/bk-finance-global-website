import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-warm-white">
          <div className="text-center px-6">
            <h1 className="font-display font-bold text-2xl text-navy mb-2">
              Something went wrong
            </h1>
            <p className="text-slate-text">
              Please refresh the page. If the problem persists, contact us at{" "}
              <a href="mailto:info@bkfinanceglobal.com" className="text-gold underline">
                info@bkfinanceglobal.com
              </a>
              .
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
