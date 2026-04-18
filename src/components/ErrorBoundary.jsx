import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-8 font-mono text-sm">
          <p className="text-terminal-red mb-2">Something went wrong.</p>
          <p className="text-terminal-muted text-xs">{this.state.error.message}</p>
          <button
            onClick={() => this.setState({ error: null })}
            className="mt-4 px-4 py-1.5 border border-terminal-border text-terminal-muted rounded hover:text-terminal-text transition-colors text-xs"
          >
            Try again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
