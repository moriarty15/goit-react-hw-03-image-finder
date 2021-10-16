import style from "./App.module.css";
import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import Button from "./Components/Button";
import Modal from "./Components/Modal";

class App extends Component {
  state = {
    query: "",
    page: 1,
    showModal: false,
  };

  handleFormSubmit = query => {
    this.setState({ query })
    this.setState({page: 1})
  }  

  clickLoadMore = (e) => {
    e.preventDefault()
    this.setState((prevState) => {return {page: prevState.page + 1}})
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.handleFormSubmit }/>
        <ImageGallery query={this.state.query} page={this.state.page} />
        <Button onClick={this.clickLoadMore} />
        {showModal && <Modal/>}
      </div>
    );
  }
}
export default App;
