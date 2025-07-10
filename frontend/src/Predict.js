import React, { useState } from "react";

function Predict() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    setPrediction("");
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const response = await fetch("https://medical-report-8u2c.onrender.com/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (err) {
      setPrediction("Error: Could not get prediction");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Upload Chest X-ray</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Predicting..." : "Upload & Predict"}
      </button>
      {prediction && <h2>Prediction: {prediction}</h2>}
    </div>
  );
}

export default Predict;
