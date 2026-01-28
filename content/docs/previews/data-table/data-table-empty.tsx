import { EmptyState } from '@/components/ui/empty-state';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';

export function DataTableEmpty() {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4}>
            <EmptyState
              title="No results"
              description="Try adjusting your filters."
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
