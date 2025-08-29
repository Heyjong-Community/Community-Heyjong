import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

export default function NavDash() {
  return (
    <nav className='shadow flex items-center justify-between px-4 py-2'>
      <div className=''>
        <Button variant={'ghost'} size={'sm'}>
          <Menu className='h-4 w-4' />
        </Button>
      </div>
      <div className=''>
        <DropdownMenu>
          <DropdownMenuTrigger className='cursor-pointer'>Jong - Mahdy</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant='default' size='sm'>
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <Button asChild variant={'outline'} className='py-2'>
                <p>Jong Mahdy</p>
              </Button> */}
      </div>
    </nav>
  );
}
