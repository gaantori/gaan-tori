import { AppShell, Container, Header } from '@mantine/core'
import React from 'react'

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <AppShell
      header={<Header height={60} p="xs">
        <Container>
        Gaan Tori
        </Container>
        </Header>}
      >
        <Container>
        {children}
        </Container>
      </AppShell>
    </div>
  )
}

export default Layout