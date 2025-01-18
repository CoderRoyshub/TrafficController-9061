import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  UserGroupIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

export default function SocialImpact() {
  const impacts = [
    {
      title: 'Eco-Friendly Choices',
      description: 'Earn rewards for choosing sustainable transport options',
      icon: CheckCircleIcon,
      stats: '2,500 kg CO₂ saved',
    },
    {
      title: 'Community Updates',
      description: 'Share and receive real-time traffic updates',
      icon: UserGroupIcon,
      stats: '15k+ active users',
    },
    {
      title: 'Reward Points',
      description: 'Get points for contributing to the community',
      icon: StarIcon,
      stats: '50k+ points awarded',
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
        <h2 className="text-3xl font-bold text-gray-900">Social Impact</h2>
        <p className="mt-2 text-gray-600">
          Making a difference in our community, one journey at a time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {impacts.map((impact, index) => (
          <motion.div
            key={impact.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <impact.icon className="h-12 w-12 text-secondary mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-center">
              {impact.title}
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              {impact.description}
            </p>
            <div className="mt-4 text-center">
              <span className="text-lg font-bold text-secondary">
                {impact.stats}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Community Leaderboard</h3>
          <div className="space-y-4">
            {[
              { name: 'Sarah J.', points: '2,450' },
              { name: 'Mike R.', points: '2,100' },
              { name: 'Emma L.', points: '1,950' },
            ].map((user, index) => (
              <div
                key={user.name}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <span className="font-bold text-gray-500 w-8">
                    #{index + 1}
                  </span>
                  <span className="font-medium">{user.name}</span>
                </div>
                <span className="text-secondary font-bold">{user.points} pts</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold mb-4">Environmental Impact</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-green-800">CO₂ Reduction</span>
                <span className="font-bold text-green-600">2,500 kg</span>
              </div>
              <div className="mt-2 h-2 bg-green-200 rounded-full">
                <div className="h-full w-3/4 bg-green-500 rounded-full" />
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Water Saved</span>
                <span className="font-bold text-blue-600">1,200 L</span>
              </div>
              <div className="mt-2 h-2 bg-blue-200 rounded-full">
                <div className="h-full w-1/2 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}