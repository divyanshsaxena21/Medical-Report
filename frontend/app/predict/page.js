"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Upload, ArrowLeft, FileImage, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function Predict() {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [prediction, setPrediction] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
    setPrediction("")
    setError("")

    if (selectedFile) {
      // Validate file type
      if (!selectedFile.type.startsWith("image/")) {
        setError("Please select a valid image file")
        return
      }

      // Validate file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB")
        return
      }

      const preview = URL.createObjectURL(selectedFile)
      setPreviewUrl(preview)
    }
  }

  const handleSubmit = async () => {
    if (!file) {
      setError("Please select an image to upload")
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    setLoading(true)
    setPrediction("")
    setError("")

    try {
      const response = await fetch(`${BACKEND_URL}/predict`, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to get a valid response from server")
      }

      const data = await response.json()
      setPrediction(data.prediction || "No prediction returned")
    } catch (err) {
      console.error("Prediction error:", err)
      setError("Could not get prediction. Please try again.")
    }

    setLoading(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      const event = { target: { files: [droppedFile] } }
      handleImageChange(event)
    }
  }

  const getPredictionColor = (pred) => {
    const prediction = pred.toLowerCase()
    if (prediction.includes("normal")) return "bg-green-100 text-green-800"
    if (prediction.includes("covid")) return "bg-red-100 text-red-800"
    if (prediction.includes("pneumonia")) return "bg-blue-100 text-blue-800"
    if (prediction.includes("tuberculosis")) return "bg-yellow-100 text-yellow-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Chest X-ray</h1>
            <p className="text-gray-600">Upload your chest X-ray image for AI-powered analysis</p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileImage className="w-5 h-5 mr-2" />
                Image Upload
              </CardTitle>
              <CardDescription>Supported formats: JPG, PNG, JPEG (Max size: 10MB)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* File Upload Area */}
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-input").click()}
              >
                <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">Drop your X-ray image here, or click to browse</p>
                <p className="text-sm text-gray-500">Drag and drop or click to select file</p>
              </div>

              {/* Error Display */}
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Image Preview */}
              {previewUrl && (
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">Preview:</h3>
                  <div className="relative">
                    <img
                      src={previewUrl || "/placeholder.svg"}
                      alt="X-ray preview"
                      className="max-w-full h-auto max-h-96 mx-auto rounded-lg border shadow-sm"
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Analyze X-ray
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {/* Prediction Result */}
              {prediction && (
                <Card className="bg-white border-2 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Analysis Complete
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-lg font-medium text-gray-700 mb-3">Prediction Result:</p>
                      <Badge className={`text-lg px-4 py-2 ${getPredictionColor(prediction)}`}>{prediction}</Badge>
                    </div>
                    <Alert className="mt-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Disclaimer:</strong> This is an AI-powered analysis tool for educational purposes.
                        Always consult with a qualified healthcare professional for medical diagnosis and treatment.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
