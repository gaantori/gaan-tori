import { Card, Center, Grid, Image, Space, Text, Title } from '@mantine/core';
import React from 'react';
import Layout from '../../components/Layout';

type Props = {};

function Movies({}: Props) {
  return (
    <div>
      <Layout>
        <Title order={1}>Movies</Title>
        <Space h="lg" />
        <Grid>
          <Grid.Col sm={4} md={3}>
            <Card p="lg" radius="md" component="a" href="movies/id" withBorder>
              <Card.Section>
                <Center>
                  <Image
                    sx={{ objectFit: 'scale-down' }}
                    p="xs"
                    radius="md"
                    src="https://m.media-amazon.com/images/M/MV5BODQ1Y2FiNzItNjdkZi00ZmRiLTllZjgtZjA2MTIyNWFjOGZhXkEyXkFqcGdeQXVyOTE1NzI0NDg@._V1_.jpg"
                    alt="Saregama"
                    withPlaceholder
                  />
                </Center>
              </Card.Section>
              <Card.Section>
                <Center>
                  <Text size="md" weight={600} pb="xs">
                    Saregama
                  </Text>
                </Center>
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </Layout>
    </div>
  );
}

export default Movies;
