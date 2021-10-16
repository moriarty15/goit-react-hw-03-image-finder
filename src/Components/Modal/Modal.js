import { Component } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByClickESC)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByClickESC)
  }

  closeModalByClickESC = e => {
    if (e.code === "Escape") this.props.onClose()
  }

  handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) this.props.onClose();
  };
  render() {
    return createPortal(
      <div className={style.Overlay} onClick={this.handleClickBackdrop}>
        <div className={style.Modal} width="300" heigth="300">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}
