const StatCard = ({ number, label, icon: Icon }) => {
  return (
    <div className="text-center text-white">
      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-medical-100 font-medium">{label}</div>
    </div>
  )
}

export default StatCard
