import style from "./App.module.css";
import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import Button from "./Components/Button";
import Modal from "./Components/Modal";
import Loader from "./Components/Loader";
import fetchImages from "./Components/fetchImages";

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    showModal: false,
    showSpiner: false,

    large: null,
  };

  componentDidMount() {
    window.addEventListener("click", (e) => {
      const findImg = e.target.src;
      const findImgforModal = this.state.images.find(
        (e) => e.webformatURL === findImg
      );
      if (findImgforModal) {
        this.setState({ large: findImgforModal.largeImageURL });
        this.setState({ showModal: true });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [] });
      this.fetchRequest();
    } else if (
      this.state.query.trim() !== "" &&
      this.state.page !== prevState.page
    ) {
      this.fetchRequest();
    }
  }

  onClose = () => {
    this.setState({ showModal: false });
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
    this.setState({ page: 1 });
  };

  clickLoadMore = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  fetchRequest = () => {
    this.setState({ showSpiner: true });

    fetchImages(this.state.query, this.state.page)
      .then((hit) => {
        if (hit.total === 0) {
          this.setState({ showSpiner: false });
          alert(
            "По данному запросу ничего не найдено, сделайте запрос более специфичным"
          );
          return;
        }
        const arrEx = hit.hits.map(({ id, largeImageURL, webformatURL }) => {
          return { id, largeImageURL, webformatURL };
        });
        this.setState({ images: [...this.state.images, ...arrEx] });
        this.setState({ showSpiner: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((e) => {
        alert("Ой, что-то пошло не так");
      });
  };

  render() {
    const { showModal, large, images, showSpiner } = this.state;
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />

        {images.length >= 12 && <Button onClick={this.clickLoadMore} />}
        {showModal && <Modal src={large} onClose={this.onClose} />}
        {showSpiner && (
          <div className={style.centred}>
            <Loader />
          </div>
        )}
      </div>
    );
  }
}
export default App;
