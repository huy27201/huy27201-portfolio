import { PropsWithChildren, ReactNode } from 'react';

interface NavProps {
  children: ReactNode;
}

const Nav = ({ children }: PropsWithChildren<NavProps>) => {
  return <div className='flex gap-2'>{children}</div>;
};

export default Nav;
