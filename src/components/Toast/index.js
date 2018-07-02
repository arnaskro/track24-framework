import React, { Component } from 'react';
import './toast.css';

class Toast extends Component {
  render() {
    return (
        <div
        className={'toast ' + (this.props.type ? `toast--${this.props.type}` : "")}
        key="toastElement"
        aria-describedby="toastMessage"
        aria-labelledby="toastTitle"
        aria-live="assertive"
        role="alertdialog">

        {/* TODO: Add Icons */}
        <i class="icon"> </i>
        <div role="document" tabIndex="0">
          <div className="toast__title">{this.props.title}</div>
          <div className="toast__message">{this.props.message}.</div>
        </div>
        <button onClick="" className="toast__close-btn" title="Close"> x </button>
      </div>
      )
    }
}

export default Toast;