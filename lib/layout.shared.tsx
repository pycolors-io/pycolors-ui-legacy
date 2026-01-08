import type {
  BaseLayoutProps,
  LinkItemType,
} from 'fumadocs-ui/layouts/shared';

export type PrimaryNavItem = {
  label: string;
  href: string;
};

export const PRIMARY_NAV_ITEMS: PrimaryNavItem[] = [
  { label: 'Documentation', href: '/docs' },
  { label: 'Components', href: '/docs/ui' },
];

// Optional: if you reactivate the nav fumadocs one day
export const layoutLinks: LinkItemType[] = PRIMARY_NAV_ITEMS.map(
  (item) => ({
    type: 'main',
    text: item.label,
    url: item.href,
    active: 'nested-url',
  })
);

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: false,
      transparentMode: 'none',
    },
    searchToggle: { enabled: false },
    themeSwitch: { enabled: false },
    // links: layoutLinks,
  };
}
