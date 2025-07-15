import { CheckCircle, AlertTriangle, Download, Share2 } from "lucide-react"

const ResultCard = ({ prediction, gradientColor }) => {
  const isNormal = prediction.toLowerCase().includes("normal")
  const Icon = isNormal ? CheckCircle : AlertTriangle

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div className="text-center mb-6">
        <div
          className={`w-16 h-16 bg-gradient-to-r ${gradientColor} rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Analysis Complete</h3>
        <p className="text-gray-600">Your X-ray has been successfully analyzed</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Prediction Result:</p>
          <div
            className={`inline-block px-6 py-3 bg-gradient-to-r ${gradientColor} text-white font-bold text-lg rounded-lg`}
          >
            {prediction}
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mb-6">
        <button className="flex-1 bg-medical-600 text-white py-2 px-4 rounded-lg hover:bg-medical-700 transition-colors duration-200 flex items-center justify-center">
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </button>
        <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
          <Share2 className="w-4 h-4 mr-2" />
          Share Result
        </button>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-yellow-800 mb-1">Medical Disclaimer</p>
            <p className="text-sm text-yellow-700">
              This AI analysis is for educational and research purposes only. Always consult with a qualified healthcare
              professional for medical diagnosis and treatment decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
