import { Link } from "react-router-dom"
import { ArrowRight, Shield, Zap, CheckCircle, Activity, Brain, Stethoscope } from "lucide-react"
import Hero from "../components/Hero"
import FeatureCard from "../components/FeatureCard"
import StatCard from "../components/StatCard"

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced deep learning algorithms trained on thousands of medical images for accurate diagnosis.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive analysis results within seconds of uploading your X-ray image.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your medical data is processed securely with end-to-end encryption and privacy protection.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Stethoscope,
      title: "Medical Grade",
      description: "Built with medical professionals and validated against clinical standards.",
      color: "from-red-500 to-red-600",
    },
  ]

  const stats = [
    { number: "99.2%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "50K+", label: "Images Analyzed", icon: Activity },
    { number: "24/7", label: "Available", icon: Shield },
    { number: "< 5s", label: "Analysis Time", icon: Zap },
  ]

  const conditions = [
    { name: "COVID-19", color: "bg-red-100 text-red-800", description: "Detect COVID-19 pneumonia patterns" },
    { name: "Pneumonia", color: "bg-blue-100 text-blue-800", description: "Identify bacterial and viral pneumonia" },
    { name: "Normal", color: "bg-green-100 text-green-800", description: "Confirm healthy lung condition" },
    { name: "Tuberculosis", color: "bg-yellow-100 text-yellow-800", description: "Detect TB-related abnormalities" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Medicure?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI technology provides healthcare professionals with reliable, fast, and accurate X-ray
              analysis to support better patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-medical-600 to-medical-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-xl text-medical-100 max-w-3xl mx-auto">
              Our platform has been helping medical professionals make faster, more accurate diagnoses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detectable Conditions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI model can accurately identify and classify various chest conditions from X-ray images with high
              precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="text-center">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${condition.color} mb-4`}>
                    {condition.name}
                  </span>
                  <p className="text-gray-600">{condition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Analyze Your X-ray?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload your chest X-ray image and get instant AI-powered analysis with detailed insights and
            recommendations.
          </p>
          <Link
            to="/analysis"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-medical-600 to-medical-700 text-white font-semibold rounded-lg hover:from-medical-700 hover:to-medical-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Analysis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
