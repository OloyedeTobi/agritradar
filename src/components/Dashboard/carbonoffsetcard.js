const CarbonOffsetCard = () => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Carbon Offset</h3>
        </div>
        <div className="p-6">
          <div className="text-3xl font-bold text-green-600 mb-2">3.8 tons</div>
          <p className="text-gray-600 mb-4">
            Your renewable energy production has offset approximately 3.8 tons of CO2 this month.
          </p>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '76%' }}></div>
          </div>
          <div className="text-right text-sm text-gray-500">76% of your monthly goal</div>
        </div>
      </div>
    );
  }

  export default CarbonOffsetCard;