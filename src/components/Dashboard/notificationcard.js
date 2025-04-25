const NotificationsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
      </div>
      <div className="divide-y divide-gray-100">
        <div className="p-4 bg-green-50">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <AlertTriangle className="text-green-600" size={18} />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Energy price increased by 5%</p>
              <p className="text-sm text-gray-500 mt-1">1 hour ago</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <AlertTriangle className="text-blue-600" size={18} />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">New buyer interested in your excess energy</p>
              <p className="text-sm text-gray-500 mt-1">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsCard;