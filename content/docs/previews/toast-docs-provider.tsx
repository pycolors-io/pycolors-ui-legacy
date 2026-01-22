'use client';

import * as React from 'react';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';

export function ToastDocsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      {children}

      <ToastViewport className="fixed bottom-4 right-4 z-50 flex w-[360px] max-w-[calc(100vw-2rem)] flex-col gap-2 outline-none" />
    </ToastProvider>
  );
}
