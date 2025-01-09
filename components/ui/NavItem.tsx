'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

interface NavItemProps {
  children: React.ReactNode;
  path: string;
  title: string;
}

const NavItem: FC<NavItemProps> = ({ children, path, title }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <div className='tooltip flex' data-tip={title}>
      <Link
        href={path}
        className={`rounded-xl border border-gray-250 p-2 text-black/50 transition-all ${isActive ? 'border-secondary bg-secondary text-white' : 'hover:border-black/40 hover:text-black'}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavItem;
