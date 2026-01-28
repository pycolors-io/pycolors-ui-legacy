import { Button } from '@/components/ui/button';
import { DialogHeader } from '@/components/ui/dialog';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  MoreHorizontal,
  Plus,
  SlidersHorizontal,
} from 'lucide-react';

export function OverlayDecisionDemo() {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <MoreHorizontal
              className="mr-2 h-4 w-4"
              aria-hidden="true"
            />
            Row actions (Dropdown)
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
            Create item (Dialog)
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create item</DialogTitle>
            <DialogDescription>
              Focused task. Short form. Explicit actions.
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm text-muted-foreground">
            Put your create form here.
          </div>
        </DialogContent>
      </Dialog>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">
            <SlidersHorizontal
              className="mr-2 h-4 w-4"
              aria-hidden="true"
            />
            Filters (Sheet)
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>
              Progressive disclosure while keeping page context.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 text-sm text-muted-foreground">
            Put advanced filters here.
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
