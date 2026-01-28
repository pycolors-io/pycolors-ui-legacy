import {
  Alert,
  AlertTitle,
  AlertDescription,
} from '@/components/ui/alert';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';

export function DataTableError() {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4}>
            <Alert variant="destructive">
              <AlertTitle>Failed to load data</AlertTitle>
              <AlertDescription>
                Please try again later.
              </AlertDescription>
            </Alert>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
