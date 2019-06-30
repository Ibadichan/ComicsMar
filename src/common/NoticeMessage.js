import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Button from "common/Button";

class NoticeMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };
    this.handleAlertClose = this.handleAlertClose.bind(this);
  }

  componentDidMount() {
    this._timerId = setTimeout(this.handleAlertClose, this.props.msToClose);
  }

  componentWillUnmount() {
    clearTimeout(this._timerId);
  }

  handleAlertClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const { text, className } = this.props;
    const hidden = this.state.isOpen ? "" : "hidden";

    return createPortal(
      <p className={`alert ${className} ${hidden}`}>
        {text}
        <Button
          className="alert-close"
          onClick={this.handleAlertClose}
          hideText
        >
          Close
        </Button>
      </p>,
      document.getElementById("alert-root")
    );
  }
}

NoticeMessage.defaultProps = {
  msToClose: 5000
};

NoticeMessage.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default NoticeMessage;
