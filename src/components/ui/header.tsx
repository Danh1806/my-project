import React from 'react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';

function Header() {
  return (  
    <div className="fixed top-2 right-2 flex items-center gap-4 z-50">
      <ul className="flex gap-2 list-none m-0 p-0">
        <li>
          <Link href='/auth/login'>đăng nhập</Link>
        </li>
        <li>
          <Link href='/auth/register'>đăng ký</Link>
        </li>
      </ul>
      <ModeToggle/>
    </div>
  );
}

export default Header;
