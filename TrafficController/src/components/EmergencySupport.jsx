import { motion } from 'framer-motion';
import {
  HeartIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function EmergencySupport() {
  const services = [
    {
      title: 'Medical Assistance',
      description: 'Quick access to medical and first-aid deliveries',
      icon: HeartIcon,
      action: 'Request Medical Help',
    },
    {
      title: 'Breakdown Support',
      description: '24/7 vehicle breakdown assistance',
      icon: WrenchScrewdriverIcon,
      action: 'Call Mechanic',
    },
    {
      title: 'Emergency Contacts',
      description: 'Quick dial emergency services',
      icon: PhoneIcon,
      action: 'View Contacts',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Emergency Support</h2>
        <p className="mt-2 text-gray-600">
          24/7 assistance for all your emergency needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <service.icon className="h-12 w-12 text-red-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-center">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              {service.description}
            </p>
            <button className="mt-4 w-full button button-primary">
              {service.action}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="card bg-red-50">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <PhoneIcon className="h-8 w-8 text-red-500" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Emergency Hotline
            </h3>
            <p className="text-red-600 font-bold text-2xl">911</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}