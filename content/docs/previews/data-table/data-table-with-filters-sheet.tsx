import { Eye } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Pagination } from '@/components/ui/pagination';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

export function DataTableWithFiltersSheet() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Filters</Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>
              Narrow results by status, plan, date range, etc.
            </SheetDescription>
          </SheetHeader>

          {/* filters UI */}
          <div className="mt-6 space-y-4">{/* ... */}</div>
        </SheetContent>
      </Sheet>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Acme</TableCell>
            <TableCell>Active</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="ghost">
                <Eye className="mr-2 h-4 w-4" aria-hidden="true" />
                View
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Pagination />
    </>
  );
}
