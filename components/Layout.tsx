import { AppShell, Header } from '@mantine/core'
import React from 'react'

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <AppShell
      header={<Header height={60} p="xs">Header content</Header>}
      >
        {children}
      </AppShell>
    </div>
  )
}

export default Layout