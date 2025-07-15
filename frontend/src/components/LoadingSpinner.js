import { Loader2, Brain } from "lucide-react"

const LoadingSpinner = () => {
  return (
    <div className="text-center py-12">
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-gradient-to-r from-medical-500 to-medical-600 rounded-full flex items-center justify-center mx-auto">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <Loader2 className="w-24 h-24 text-medical-300 animate-spin absolute -top-2 -left-2" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing X-ray Image</h3>
      <p className="text-gray-600 mb-4">Our AI is processing your image...</p>
      <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
        <div
          className="bg-gradient-to-r from-medical-500 to-medical-600 h-2 rounded-full animate-pulse"
          style={{ width: "70%" }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-2">This usually takes a few seconds</p>
    </div>
  )
}

export default LoadingSpinner
