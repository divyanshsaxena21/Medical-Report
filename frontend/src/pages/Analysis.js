"use client";

import { useState, useRef } from "react";
import {
  Upload,
  FileImage,
  Loader2,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultCard from "../components/ResultCard";

// base URL up through /predict
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL;

const LABELS = ["COVID-19", "Pneumonia", "Normal", "Tuberculosis"];

const Analysis = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (selectedFile) => {
    setFile(selectedFile);
    setPrediction("");
    setError("");

    if (selectedFile) {
      if (!selectedFile.type.startsWith("image/")) {
        setError("Please select a valid image file (JPG, PNG, JPEG)");
        return;
      }
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setPrediction("");
    setError("");

    try {
      const res = await fetch(`${BACKEND_URL}/predict`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      const { prediction: pred } = await res.json();

      // ensure it's one of your labels
      if (LABELS.includes(pred)) {
        setPrediction(pred);
      } else {
        setPrediction("Unknown result: " + pred);
      }
    } catch (err) {
      console.error("Prediction error:", err);
      setError("Failed to analyze the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getPredictionColor = (pred) => {
    const lc = pred.toLowerCase();
    if (lc.includes("normal")) return "from-green-500 to-green-600";
    if (lc.includes("covid")) return "from-red-500 to-red-600";
    if (lc.includes("pneumonia")) return "from-blue-500 to-blue-600";
    if (lc.includes("tuberculosis")) return "from-yellow-500 to-yellow-600";
    return "from-gray-500 to-gray-600";
  };

  const resetAnalysis = () => {
    setFile(null);
    setPreviewUrl(null);
    setPrediction("");
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-medical-600 hover:text-medical-700 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            X-ray Analysis
          </h1>
          <p className="text-xl text-gray-600">
            Upload your chest X-ray image for AI‑powered medical analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center mb-4">
                <FileImage className="w-6 h-6 text-medical-600 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Upload Image
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Supported formats: JPG, PNG, JPEG (Max size: 10MB)
              </p>
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                  dragOver
                    ? "border-medical-400 bg-medical-50"
                    : "border-gray-300 hover:border-medical-400 hover:bg-gray-50"
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  handleImageChange(e.dataTransfer.files[0]);
                }}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e.target.files[0])}
                  className="hidden"
                />
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Drop your X-ray image here
                </h3>
                <p className="text-gray-500 mb-4">
                  or click to browse files
                </p>
                <button className="bg-medical-600 text-white px-6 py-2 rounded-lg hover:bg-medical-700 transition-colors duration-200">
                  Choose File
                </button>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              {file && (
                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-medical-600 to-medical-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-medical-700 hover:to-medical-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Analyze Image
                      </>
                    )}
                  </button>
                  <button
                    onClick={resetAnalysis}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Reset
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Preview & Result */}
          <div className="space-y-6">
            {previewUrl && (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Image Preview
                </h3>
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="X-ray preview"
                    className="w-full h-auto max-h-96 object-contain rounded-lg border shadow-sm"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                    <FileImage className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>File: {file.name}</p>
                  <p>Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
            )}

            {loading && (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <LoadingSpinner />
              </div>
            )}

            {prediction && !loading && (
              <ResultCard
                prediction={prediction}
                gradientColor={getPredictionColor(prediction)}
              />
            )}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Upload className="w-8 h-8 text-medical-600" />,
                title: "1. Upload",
                desc: "Upload your chest X-ray image in JPG, PNG, or JPEG format",
              },
              {
                icon: <Loader2 className="w-8 h-8 text-medical-600" />,
                title: "2. Analyze",
                desc: "Our AI model processes the image using advanced deep learning",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-medical-600" />,
                title: "3. Results",
                desc: "Get detailed analysis results with confidence scores",
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
