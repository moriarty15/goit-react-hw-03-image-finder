import { Component } from "react";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

export default class ImageGallery extends Component {
  state = {
    images: [],
  };


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({images: []})
      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=23320531-e67f94e9f6229e6b46894ace7&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((r) => r.json())
        .then((hit) => {
          this.setState({ images: [...this.state.images, ...hit.hits] });
        });
    }
    else if (this.props.query.trim() !== "" && this.props.page !== prevProps.page) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=23320531-e67f94e9f6229e6b46894ace7&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((r) => r.json())
        .then((hit) => {
          this.setState({ images: [...this.state.images, ...hit.hits] });
        });    
    }
  }
  render() {
    return (
      <ul className={style.ImageGallery}>
        {this.state.images.length !== 0 &&
          this.state.images.map((e) => (
            <ImageGalleryItem key={e.id} src={e.webformatURL} alt={e.user} />
          ))}
      </ul>
    );
  }
}

