import { CommonText, Config, Links } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='footer footer-center text-base-content'>
      <aside>
        <p>
          {CommonText.since} {Config.startYear} -{' '}
          <Link
            href={Links.social.linkedin}
            className='link text-primary'
            target='_blank'
          >
            {CommonText.name}
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
