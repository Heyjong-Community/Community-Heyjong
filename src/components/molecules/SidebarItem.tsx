'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface SidebarItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
}

export default function SidebarItem({ href, label, icon: Icon }: SidebarItemProps) {
  const pathname = usePathname();
  const mainRoute = 'dashboard';

  const route = href ? `/${mainRoute}/${href}` : `/${mainRoute}`;

  const isActive = pathname === route || pathname.startsWith(`${route}/`);

  return (
    <Link
      href={route}
      className={`group duration-300 flex px-4 py-2 items-center gap-3 rounded-lg hover:cursor-pointer ${
        isActive ? 'bg-primary' : 'text-white hover:bg-primary'
      }`}
    >
      <Icon className={`size-6 ${isActive ? 'text-white' : 'text-black group-hover:text-white'}`} />
      <p className={`font-semibold ${isActive ? 'text-white' : 'text-black group-hover:text-white'}`}>{label}</p>
    </Link>
  );
}
