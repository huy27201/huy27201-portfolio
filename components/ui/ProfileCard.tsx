'use client';

import { CommonText } from '@/constants';
import { motion } from 'framer-motion';

const ProfileCard = () => {
  return (
    <div className='flex items-center gap-4 p-4'>
      <div className='ml-auto flex items-center gap-2'>
        <motion.span
          className='h-2.5 w-2.5 rounded-full bg-success'
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <span className='text-sm text-gray-600'>
          {CommonText.profile.status}
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
