import style from "./App.module.css";
import React, { Component } from "react";

class App extends Component {
    state = {
        images: null,
        complete: false
    }
// this.setState((prevState) => {images: prevState.images.push(user)})
    componentDidMount() {
        fetch("https://pixabay.com/api/?q=cat&page=1&key=23320531-e67f94e9f6229e6b46894ace7&image_type=photo&orientation=horizontal&per_page=12")
            .then(r => r.json())
            .then(hit =>
            {
                this.setState({ images: hit.hits })
                this.setState({complete: true})
            }
            )
    }
    render() {
        const { images, complete } = this.state;
    return (
      <div>
        <header className={style.Searchbar}>
          <form className={style.SearchForm}>
            <button type="submit" className={style.SearchForm_button}>
              <span className={style.SearchForm_button_label}>Search</span>
            </button>

            <input
              className={style.SearchForm_input}
              type="text"
            //   autocomplete="off"
            //   autofocus
                //         {images.map(e => {
                //     return <li>{e.webformatURL}</li>
                // })}
              placeholder="Search images and photos"
            />
          </form>
        </header>
            <ul className={style.ImageGallery}>
                {!complete ? <p>No</p> : images.map((e, i) => <li key={i}><img src={e.webformatURL }/></li>) }
        </ul>
      </div>
    );
  }
}
export default App;
