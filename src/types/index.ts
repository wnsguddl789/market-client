import React from 'react';

interface hasChildren {
  children?: React.ReactNode;
}

interface routeType {
  content: string;
  href: string;
}

export type { hasChildren, routeType };
