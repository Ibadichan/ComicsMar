import React, { Component } from "react";
import PropTypes from "prop-types";
import OrderForm from "./components/OrderForm";
import OrderModal from "./components/OrderModal";
import OrderFormToggler from "./components/OrderFormToggler";
import Info from "./components/Info";
import getWindowSize from "utils/getWindowSize";

class PurchaseItem extends Component {
  constructor(props) {
    super(props);
    this.state = { formIsOpen: false, modalMode: false };
    this.toggleForm = this.toggleForm.bind(this);
    this._onResize = this._onResize.bind(this);
  }

  componentDidMount() {
    this._onResize();
    window.addEventListener("resize", this._onResize);
  }

  componentWillUnmount() {
    document.body.classList.remove("with-modal");
    window.removeEventListener("resize", this._onResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.modalMode === true &&
      this.state.formIsOpen !== prevState.formIsOpen
    ) {
      document.body.classList.toggle("with-modal");
    }
  }

  _onResize() {
    const width = getWindowSize().width;

    if (width >= 650) {
      this.setState({ modalMode: true });
    } else {
      this.setState({ modalMode: false });
    }
  }

  toggleForm(event) {
    if (event.target === event.currentTarget) {
      this.setState(prevState => ({ formIsOpen: !prevState.formIsOpen }));
    }
  }

  render() {
    const { handleSubmit, reset, submitting, pristine, purchase } = this.props;
    const formClassName = "purchase-order-form";
    const isOpen = this.state.formIsOpen;
    const formProps = {
      handleSubmit,
      reset,
      submitting,
      pristine,
      formClassName,
      isOpen
    };
    const formVisibility = isOpen ? "open" : "hidden";

    return (
      <li className="purchase-item">
        <Info purchase={purchase} />

        <OrderFormToggler
          toggle={this.toggleForm}
          className={`toggle-${formClassName} form-is-${formVisibility}`}
        />

        {this.state.modalMode ? (
          <OrderModal
            isOpen={isOpen}
            close={this.toggleForm}
            formProps={formProps}
          />
        ) : (
          <OrderForm {...formProps} />
        )}
      </li>
    );
  }
}

PurchaseItem.propTypes = {
  purchase: PropTypes.object.isRequired
};

export default PurchaseItem;
