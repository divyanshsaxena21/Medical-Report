import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Chest X-ray Disease Classifier</h1>
      <p>This app uses a deep learning model to classify chest X-rays into:</p>
      <ul style={{ textAlign: "left", display: "inline-block" }}>
        <li>COVID-19</li>
        <li>Pneumonia</li>
        <li>Normal</li>
        <li>Tuberculosis</li>
      </ul>
      <p>Click below to upload an image and get a prediction:</p>
      <Link to="/predict">
        <button>Go to Predict</button>
      </Link>
    </div>
  );
}

export default Home;
