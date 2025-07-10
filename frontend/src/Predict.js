import React, { useState } from "react";

function Predict() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = process.env.REACT_APP_API_URL;

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPrediction("");

    if (selectedFile) {
      const preview = URL.createObjectURL(selectedFile);
      setPreviewUrl(preview);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setPrediction("");

    try {
      const response = await fetch(`${BACKEND_URL}/predict`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to get a valid response");
      }

      const data = await response.json();
      setPrediction(data.prediction || "No prediction returned.");
    } catch (err) {
      console.error("Prediction error:", err);
      setPrediction("Error: Could not get prediction.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Upload Chest X-ray</h1>

      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br />
      {previewUrl && (
        <div style={{ margin: "20px 0" }}>
          <img
            src={previewUrl}
            alt="Preview"
            style={{ maxWidth: "300px", border: "1px solid #ccc", borderRadius: "8px" }}
          />
        </div>
      )}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Predicting..." : "Upload & Predict"}
      </button>

      {prediction && (
        <h2 style={{ marginTop: "30px", color: "#2c3e50" }}>Prediction: {prediction}</h2>
      )}
    </div>
  );
}

export default Predict;
