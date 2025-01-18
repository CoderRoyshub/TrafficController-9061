import { motion } from 'framer-motion';
import {
  TruckIcon,
  ArrowPathIcon,
  BoltIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

export default function Features() {
  const features = [
    {
      title: 'Real-Time Delivery',
      description: 'Get food and essentials delivered with dynamic route calculation',
      icon: TruckIcon,
      color: 'text-blue-500',
    },
    {
      title: 'Transport Options',
      description: 'Access alternative transport like bicycles or scooters',
      icon: ArrowPathIcon,
      color: 'text-green-500',
    },
    {
      title: 'AI Assistance',
      description: 'Smart traffic predictions and route optimization',
      icon: BoltIcon,
      color: 'text-purple-500',
    },
    {
      title: 'Productivity Hub',
      description: 'Stay productive with remote work tools and entertainment',
      icon: ComputerDesktopIcon,
      color: 'text-orange-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Key Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card text-center"
          >
            <feature.icon className={`h-12 w-12 mx-auto ${feature.color}`} />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="card">
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Open the App</h4>
              <p className="text-gray-600">
                Launch the Traffic Relief Dashboard to access all features
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Choose Your Service</h4>
              <p className="text-gray-600">
                Select from delivery, transport, or productivity options
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Enjoy the Benefits</h4>
              <p className="text-gray-600">
                Make the most of your time with our smart features
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}