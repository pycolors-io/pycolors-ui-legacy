import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';

export function DataTableLoading() {
  return (
    <Table>
      <TableBody>
        {Array.from({ length: 3 }).map((_, i) => (
          <TableRow key={i}>
            <TableCell>
              <Skeleton className="h-4 w-32" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-24" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-16" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
