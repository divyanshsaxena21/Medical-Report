import { Link } from "react-router-dom";
import { ArrowRight, Play, Shield, Zap, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-medical-600 via-medical-700 to-medical-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full">
          <img
            src="/hero.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
            width={1600}
            height={900}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">99.2% Accuracy Rate</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                AI Medical
              </span>
              Analysis
            </h1>

            <p className="text-xl text-medical-100 mb-8 leading-relaxed">
              Revolutionary chest X-ray analysis powered by deep learning. Get instant, accurate medical insights to
              support better patient outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/analysis"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-medical-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-medical-700 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Instant Results</div>
                  <div className="text-sm text-medical-200">{"< 5 seconds"}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Secure</div>
                  <div className="text-sm text-medical-200">HIPAA Compliant</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Validated</div>
                  <div className="text-sm text-medical-200">Clinically Tested</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-[500px] h-[600px]">
                <img
                  src="/hero-placeholder.jpg"
                  alt="Medical AI Analysis"
                  className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  width={500}
                  height={600}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Normal</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Confidence: 98.5%</div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-medical-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-medical-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Analysis Time</div>
                    <div className="text-xs text-gray-500">2.3 seconds</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl transform -rotate-3"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;