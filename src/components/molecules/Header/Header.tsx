import Link from 'next/link';
import { x } from '@xstyled/emotion';
import React from 'react';
import Logo from '@/components/icons/Logo';

const Header = () => {
  return (
    <x.header
      w="100%"
      h="80px"
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      padding="0 20px 0 20px"
    >
      <Link href="/" passHref>
        <Logo />
      </Link>
    </x.header>
  );
};

export default Header;
