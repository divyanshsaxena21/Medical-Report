const FeatureCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg card-hover group">
      <div
        className={`w-12 h-12 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default FeatureCard
