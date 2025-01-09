import { CommonText } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content flex-col gap-8 lg:flex-row lg:gap-2'>
        <div className='relative h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]'>
          <Image
            src='/assets/profile-image.jfif'
            className='rounded-lg object-cover shadow-2xl'
            fill
            alt={CommonText.name}
          />
        </div>
        <div className='lg:ml-8'>
          <h1 className='text-5xl font-bold'>{CommonText.hero.title}</h1>
          <p className='py-6'>{CommonText.hero.description}</p>
          <Link href='/about' className='btn btn-primary rounded-xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
              />
            </svg>

            {CommonText.hero.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
