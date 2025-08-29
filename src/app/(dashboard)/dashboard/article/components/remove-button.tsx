import { useCategories } from '@/hooks/category/useCategories';
import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

type Props = {
  id: string;
  name: string;
};

export default function RemoveCategoryButton({ id, name }: Props) {
  const { removeCategory } = useCategories();
  const [open, setOpen] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleRemove = async () => {
    try {
      setSubmitting(true);
      await removeCategory(id);

      setOpen(false);
      toast.success('Kategori dihapus');
    } catch (error) {
      toast.success(`${(error as Error).message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant='destructive' size='sm'>
          Hapus
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus kategori?</AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini tidak bisa dibatalkan. Data kategori<strong> {name}</strong> akan dihapus permanen.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={submitting}>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemove} disabled={submitting} className='bg-red-600 hover:bg-red-700'>
            {submitting ? 'Menghapus...' : 'Ya, hapus'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
