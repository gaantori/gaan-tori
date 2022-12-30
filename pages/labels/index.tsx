import { Card, Center, Grid, Image, Text, Title } from '@mantine/core';
import React from 'react';
import Layout from '../../components/Layout';

type Props = {};

function Labels({}: Props) {
  return (
    <div>
      <Layout>
        <Title order={1}>Labels</Title>
        <Grid>
          <Grid.Col sm={4} md={3}>
            <Card p="lg" radius="md" component="a" href="" withBorder>
              <Card.Section>
                <Center>
                  <Image
                    sx={{ objectFit: 'scale-down' }}
                    p="xs"
                    radius="md"
                    src="https://upload.wikimedia.org/wikipedia/en/5/54/Saregama_logo.png"
                    alt="Saregama"
                    withPlaceholder
                  />
                </Center>
              </Card.Section>
              <Card.Section>
                <Center>
                  <Text weight={600}>Saregama</Text>
                </Center>
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </Layout>
    </div>
  );
}

export default Labels;
