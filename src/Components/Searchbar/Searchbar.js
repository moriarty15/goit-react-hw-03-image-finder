import { Component } from "react";
import style from "./Searchbar.module.css"

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  searchItem = (e) => {
      this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  searchButton = (e) => {
      e.preventDefault();
      if (this.state.query.trim() === "") {
          return
      }
      this.props.onSubmit(this.state.query)
      this.setState({query: ""})
  };
  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.searchButton}>
          <button
            type="submit"
            className={style.SearchForm_button}
            onClick={this.searchButton}
          >
            <span className={style.SearchForm_button_label}>Search</span>
          </button>

          <input
            onChange={this.searchItem}
            className={style.SearchForm_input}
            type="text"
            //   autocomplete="off"
            //   autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
