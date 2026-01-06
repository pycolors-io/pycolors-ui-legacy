import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';

// Custom components available in .mdx
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIndicator,
  AlertContent,
} from '@/components/ui/alert';
import { Preview } from '@/components/docs/preview';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from './components/ui/input';

export function getMDXComponents(
  components?: MDXComponents
): MDXComponents {
  return {
    ...defaultMdxComponents,

    // Native integration of Fumadocs CodeBlock (recommended)
    // All ```tsx into .mdx go through this wrapper
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),

    Alert,
    AlertTitle,
    AlertDescription,
    AlertIndicator,
    AlertContent,
    Preview,
    Badge,
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Input,
    Tabs,
    Tab,
    ...components,
  };
}
