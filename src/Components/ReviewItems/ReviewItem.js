import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { _id, img, name, price, quantity } = product;

  return (
    <div className="review-container">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="details-inside">
        <div>
          <h5>{name}</h5>
          <p>
            Price : $<span>{price}</span>
          </p>
          <p>
            <small>
              Quantity : <span>{quantity}</span>
            </small>
          </p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveItem(_id)}
            className="button-class"
          >
            <FontAwesomeIcon className="icon-class" icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
