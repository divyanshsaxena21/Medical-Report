"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "support@medicure.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 7017759125",
      description: "24/7 support available",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Kanpur",
      description: "Visit our headquarters",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-600 to-medical-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-medical-100 max-w-3xl mx-auto">
            Get in touch with our team for support, partnerships, or general inquiries
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl card-hover">
                  <div className="w-16 h-16 bg-gradient-to-r from-medical-500 to-medical-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg text-medical-600 font-medium mb-2">{info.details}</p>
                  <p className="text-gray-600">{info.description}</p>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Send us a Message</h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-200"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-200 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-medical-600 to-medical-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-medical-700 hover:to-medical-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How accurate is the AI analysis?</h3>
              <p className="text-gray-600">
                Our AI model achieves over 99% accuracy in detecting various chest conditions, validated against
                clinical standards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my medical data secure?</h3>
              <p className="text-gray-600">
                Yes, we use end-to-end encryption and comply with HIPAA regulations to ensure your data is completely
                secure.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use this for clinical diagnosis?</h3>
              <p className="text-gray-600">
                Our tool is designed to assist healthcare professionals. Always consult with a qualified doctor for
                medical diagnosis.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What image formats are supported?</h3>
              <p className="text-gray-600">We support JPG, PNG, and JPEG formats with a maximum file size of 10MB.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
