import React, { Component } from 'react';
import './toast.css';

class Toast extends Component {
  render() {
    return (
        <div
        className={'toast ' + (this.props.type ? `toast--${this.props.type}` : "")}
        key="toastElement"
        aria-describedby="toastMessage"
        aria-hidden="{!visible}"
        aria-labelledby="toastTitle"
        aria-live="assertive"
        role="alertdialog">

        {/* Add Icons */}
        <i class="icon"> </i>
        <div className="" role="document" tabIndex="0">
          <div className="toast__title">Alert</div>
          <div className="toast__message">Toast message displayed here. It can span multiple lines.</div>
        </div>
        <button onClick="{onClick}" className="toast__close-btn" title="Close"> x </button>

      </div>
      )
    }
}

export default Toast;