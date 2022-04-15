import React from "react";
import './BookATableSections.css';
export const BookATableSection = () => {
  return (
    <div className="BookATableSection">
      <div className="title">
        <h2>Reservation</h2>
        <h1>Book a Table</h1>
      </div>
      <div className="form">
        <div className="input">
        <div className="inputdivs">
          <input type="text" name="name" placeholder="Your Name" />
        </div>
        <div className="inputdivs">
          <input type="Email" name="Email" placeholder="Your Email" />
        </div>
        <div className="inputdivs">
          <input type="text" name="Phone Number" placeholder="Your Phone" />
        </div>
        <div className="inputdivs">
          <input type="text" name="Date" placeholder="Date" />
        </div>
        <div className="inputdivs">
          <input type="text" name="Time" placeholder="Time"/>
        </div>
        <div className="inputdivs">
          <input type="number" name="Phone Number" placeholder="# of people" />
        </div>
        </div>
        <div class="Textareadiv">
            <textarea class="" name="message" rows="5" placeholder="Message"></textarea>
        </div>
        <button></button>
      </div>
    </div>
  );
};
