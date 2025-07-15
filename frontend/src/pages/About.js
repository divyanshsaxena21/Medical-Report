import { Brain, Users, Award, Target, Heart, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Technology",
      description: "Our deep learning models are trained on extensive medical datasets to provide accurate diagnoses.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Developed by a team of medical professionals, AI researchers, and software engineers.",
    },
    {
      icon: Award,
      title: "Clinically Validated",
      description: "Our algorithms have been validated against clinical standards and peer-reviewed research.",
    },
    {
      icon: Target,
      title: "High Accuracy",
      description: "Achieving over 99% accuracy in detecting various chest conditions from X-ray images.",
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Designed to improve patient outcomes through faster and more accurate diagnoses.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Built with healthcare data security and HIPAA compliance at its core.",
    },
  ];

  const team = [
    {
      name: "Divyansh Saxena",
      role: "ML Software Engineer",
      image: "/saxena.jpg",
      description: "Expert in machine learning algorithms and medical image analysis.",
    },
    {
      name: "Ayush Sharma",
      role: "Software Engineer",
      image: "/AYush.jpg",
      description: "Full-stack developer with a focus on healthcare applications.",
    },
    {
      name: "Ashmit Kumar",
      role: "Software Engineer",
      image: "/Asmit.jpg",
      description: "Full-stack developer with expertise in healthcare applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-600 to-medical-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Medicure</h1>
          <p className="text-xl text-medical-100 max-w-3xl mx-auto">
            Revolutionizing medical diagnosis through artificial intelligence and deep learning technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Medicure, we believe that advanced AI technology should be accessible to healthcare professionals
                worldwide. Our mission is to democratize medical diagnosis by providing accurate, fast, and reliable
                AI-powered analysis tools.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We're committed to improving patient outcomes by enabling earlier detection of diseases, reducing
                diagnostic errors, and supporting healthcare professionals with cutting-edge technology.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-medical-50 rounded-lg">
                  <div className="text-2xl font-bold text-medical-600">50K+</div>
                  <div className="text-sm text-gray-600">Images Analyzed</div>
                </div>
                <div className="text-center p-4 bg-medical-50 rounded-lg">
                  <div className="text-2xl font-bold text-medical-600">99.2%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/about.png"
                alt="Medical AI Technology"
                className="rounded-lg shadow-xl"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-medical-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines medical expertise with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-medical-500 to-medical-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of medical professionals, researchers, and engineers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                    width={192}
                    height={192}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-medical-600/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-medical-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Technology</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Built on state-of-the-art deep learning frameworks and trained on diverse medical datasets
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-400 mb-2">TensorFlow</div>
              <p className="text-gray-400">Deep Learning Framework</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-400 mb-2">PyTorch</div>
              <p className="text-gray-400">Neural Networks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-400 mb-2">OpenCV</div>
              <p className="text-gray-400">Image Processing</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-400 mb-2">React</div>
              <p className="text-gray-400">User Interface</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;