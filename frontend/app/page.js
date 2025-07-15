import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Shield, Stethoscope, Heart } from "lucide-react"

export default function Home() {
  const diseases = [
    { name: "COVID-19", icon: Shield, color: "bg-red-100 text-red-800" },
    { name: "Pneumonia", icon: Activity, color: "bg-blue-100 text-blue-800" },
    { name: "Normal", icon: Heart, color: "bg-green-100 text-green-800" },
    { name: "Tuberculosis", icon: Stethoscope, color: "bg-yellow-100 text-yellow-800" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Chest X-ray Disease Classifier</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced AI-powered medical imaging analysis for accurate chest X-ray classification
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">How It Works</CardTitle>
              <CardDescription className="text-center text-lg">
                Our deep learning model analyzes chest X-rays to detect various conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {diseases.map((disease, index) => {
                  const Icon = disease.icon
                  return (
                    <div key={index} className="text-center p-4 rounded-lg border bg-white">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 bg-gray-100">
                        <Icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <Badge className={disease.color}>{disease.name}</Badge>
                    </div>
                  )
                })}
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-6">Upload your chest X-ray image and get instant AI-powered analysis</p>
                <Link href="/predict">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Start Analysis
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Secure & Private</h3>
                <p className="text-sm text-gray-600">Your medical data is processed securely and never stored</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Activity className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Fast Results</h3>
                <p className="text-sm text-gray-600">Get accurate predictions in seconds</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Stethoscope className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Medical Grade</h3>
                <p className="text-sm text-gray-600">Trained on extensive medical datasets</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
