import { motion } from 'framer-motion';
import { MapIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Dashboard() {
  const stats = [
    { id: 1, name: 'Active Deliveries', value: '24', icon: TruckIcon },
    { id: 2, name: 'Average Wait Time', value: '12 min', icon: ClockIcon },
    { id: 3, name: 'Traffic Hotspots', value: '3', icon: MapIcon },
  ];

  const deliveries = [
    { id: 1, orderNum: '1001', eta: '15 min', location: [40.7128, -74.0060], status: 'In Progress' },
    { id: 2, orderNum: '1002', eta: '20 min', location: [40.7580, -73.9855], status: 'Picking Up' },
    { id: 3, orderNum: '1003', eta: '10 min', location: [40.7549, -73.9840], status: 'Delivering' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: stat.id * 0.1 }}
            className="card bg-gradient-to-br from-white to-gray-50 border border-gray-100"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-primary bg-opacity-10">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{stat.name}</h3>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
        >
          <h2 className="text-xl font-bold mb-4 text-gray-900">Real-Time Traffic Map</h2>
          <div className="h-[400px] rounded-lg overflow-hidden border border-gray-200">
            <MapContainer
              center={[40.7128, -74.0060]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {deliveries.map((delivery) => (
                <Marker key={delivery.id} position={delivery.location}>
                  <Popup>
                    <div className="text-sm">
                      <p className="font-semibold">Order #{delivery.orderNum}</p>
                      <p>ETA: {delivery.eta}</p>
                      <p>Status: {delivery.status}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card"
        >
          <h2 className="text-xl font-bold mb-4 text-gray-900">Active Deliveries</h2>
          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3">
                      <div className={`h-2.5 w-2.5 rounded-full ${
                        delivery.status === 'In Progress' ? 'bg-yellow-400' :
                        delivery.status === 'Picking Up' ? 'bg-blue-400' :
                        'bg-green-400'
                      }`} />
                      <p className="font-medium text-gray-900">Order #{delivery.orderNum}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Status: {delivery.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary">ETA: {delivery.eta}</p>
                    <button className="text-sm text-blue-600 hover:text-blue-700 mt-1">
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}