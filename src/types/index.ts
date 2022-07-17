import React from 'react';

interface hasChildren {
  children?: React.ReactNode;
}

interface routeType {
  content: string;
  href: string;
  requiredLoggedIn: boolean;
}

export type { hasChildren, routeType };
