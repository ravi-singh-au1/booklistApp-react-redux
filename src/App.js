import React, { Component } from "react";
import data from "./data";

import "./App.css";
import Rating from "./Rating.js";
// import StarRating from "react-star-rating";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
const BookList = data.Book;
console.log(BookList);

class App extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="navv">
          <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
              BookList
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        <div className="sliderimg">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100 imgg" src="1.jpg" alt="First slide" />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 imgg "
                  src="2.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 imgg" src="3.jpg" alt="Third slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="sl">
          <div className="rows">
            {BookList.map(book => (
              <div className="row card shadow-lg p-3 mb-5 bg-yellow rounded">
                <div className="col ">
                  <img class="bookimg" src={book.imageLink} />
                  <br />
                  <strong>Author</strong> : <span>{book.author}</span>
                  <br />
                  <strong>Country</strong> : <span>{book.country}</span>
                  <br />
                  <strong>Language</strong> : <span>{book.language}</span>
                  <br />
                  <strong>Pages</strong> : <span>{book.pages}</span>
                  <br />
                  <strong>Title</strong> : <span>{book.title}</span>
                  <br />
                  <strong>Year</strong> : <span>{book.year}</span>
                  <br />
                  {/* <img src={book.imageLink} class="card-img-top img " /> */}
                  <Rating />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
