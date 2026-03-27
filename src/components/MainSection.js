import React, { useState, useEffect } from "react";
import flavors from "../data/flavors";
import reviews from "../data/reviews";

function MainSection() {
  const [featuredFlavors, setFeaturedFlavors] = useState([]);
  const [featuredReviews, setFeaturedReviews] = useState([]);

  useEffect(() => {
    // Pick 3 random flavors
    var shuffledFlavors = [...flavors].sort(() => 0.5 - Math.random());
    setFeaturedFlavors(shuffledFlavors.slice(0, 3));

    // Pick 2 random reviews
    var shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
    setFeaturedReviews(shuffledReviews.slice(0, 2));
  }, []);

  function renderStars(rating) {
    var stars = "";
    for (var i = 0; i < 5; i++) {
      if (i < rating) {
        stars += "★";
      } else {
        stars += "☆";
      }
    }
    return stars;
  }

  return (
    <div className="main-section">
      <h2>About Sweet Scoop Ice Cream</h2>
      <p>
        Sweet Scoop Ice Cream is a family-owned business that has been serving
        delicious ice cream since 1990. We pride ourselves on using only the
        freshest ingredients to create our unique flavors. Whether you're in the
        mood for a classic vanilla or something more adventurous like our
        signature "Chocolate Explosion," we have something for everyone. Come
        visit us and treat yourself to a sweet scoop today!
      </p>

      <h2>Featured Flavors</h2>
      <div className="flavor-grid">
        {featuredFlavors.map(function (flavor) {
          return (
            <div className="flavor-card" key={flavor.id}>
              <h3>{flavor.name}</h3>
              <p>{flavor.description}</p>
              <p>Price: {flavor.price}</p>
              <img src={flavor.image} alt={flavor.name} />
            </div>
          );
        })}
      </div>

      <h2>Customer Reviews</h2>
      {featuredReviews.map(function (review, index) {
        return (
          <div key={index}>
            <h3>{review.customerName}</h3>
            <p>Rating: {renderStars(review.rating)}</p>
            <p>{review.review}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MainSection;