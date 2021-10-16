import { Component } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
  render() {
    return createPortal(
      <div className={style.Overlay}>
        <div className={style.Modal} width="300" heigth="300">
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
