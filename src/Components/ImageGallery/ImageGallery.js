import { Component } from "react";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class ImageGallery extends Component {
  state = {
    isDone: false,
    showSpiner: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      localStorage.setItem("images", "[]");
      this.fetchRequest();
    } else if (
      this.props.query.trim() !== "" &&
      this.props.page !== prevProps.page
    ) {
      this.fetchRequest();
    }
  }

  fetchRequest = () => {
    this.setState({ showSpiner: true });
    fetch(
      `https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=23320531-e67f94e9f6229e6b46894ace7&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((r) => r.json())
      .then((hit) => {
        const saveImg = JSON.parse(localStorage.getItem("images"));
        saveImg.push(...hit.hits);
        localStorage.setItem("images", JSON.stringify(saveImg));
        this.setState({ showSpiner: false });
        this.setState({ isDone: true });
      });
  };

  render() {
    const images = JSON.parse(localStorage.getItem("images"));

    return (
      <>
        {this.state.isDone && (
          <ul className={style.ImageGallery}>
            {images.length !== 0 &&
              images.map((e) => (
                <ImageGalleryItem
                  key={e.id}
                  src={e.webformatURL}
                  alt={e.user}
                />
              ))}
          </ul>
        )}
        {this.state.showSpiner && (
          <div className={style.centred}>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={100000} //3 secs
            />
          </div>
        )}
      </>
    );
  }
}
