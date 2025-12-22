'use client';

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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { useLogoutUser } from '@/hooks/user/useUserLogout';

export default function NavDash() {
  const { handleLogout } = useLogoutUser();
  return (
    <nav className='shadow flex items-center justify-between px-4 py-2'>
      <div className=''>
        <Button variant={'ghost'} size={'sm'}>
          <Menu className='h-4 w-4' />
        </Button>
      </div>
      <div className=''>
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger className='cursor-pointer'>Jong - Mahdy</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>
                <DialogTrigger asChild>
                  <Button variant='default' size='sm'>
                    Logout
                  </Button>
                </DialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent className='sm:max-w-md'>
            <DialogHeader>
              <DialogTitle className='text-black'>Konfirmasi Logout</DialogTitle>
              <DialogDescription className='text-text-light'>Apakah kamu yakin ingin keluar?</DialogDescription>
            </DialogHeader>

            <DialogFooter className='flex justify-end gap-2'>
              <DialogClose asChild>
                <button
                  type='button'
                  className='rounded-md border border-gray-600 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800'
                >
                  Batal
                </button>
              </DialogClose>
              <button
                type='button'
                onClick={handleLogout}
                className='bg-primary hover:bg-primary/80 rounded-md px-3 py-2 text-sm font-semibold text-white'
              >
                Logout
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* <Button asChild variant={'outline'} className='py-2'>
                <p>Jong Mahdy</p>
              </Button> */}
      </div>
    </nav>
  );
}
