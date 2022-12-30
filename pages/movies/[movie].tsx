import { Card, Center, Grid, Image, Text } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import React from 'react';
import Layout from '../../components/Layout';
import songs from '../songs.json';

type Props = {};

function Movie({}: Props) {
  return (
    <div>
      <Layout>
        <Grid>
          <Grid.Col sm={6} lg={4}>
            <Card p="lg" radius="md" component="a" href="movies/id" withBorder>
              <Card.Section>
                <Center>
                  <Image
                    sx={{ objectFit: 'scale-down' }}
                    p="xs"
                    radius="md"
                    src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/sagarika-et00313004-20-07-2021-06-03-26.jpg"
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
          <Grid.Col sm={6} lg={8} sx={{ height: 280 }}>
            <DataTable
              withBorder
              borderRadius="md"
              highlightOnHover
              horizontalSpacing="sm"
              columns={[
                { accessor: 'name' },
                { accessor: 'missionStatement', width: 150 },
              ]}
              records={songs}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col sm={4} md={3}>
            <Card p="lg" radius="md" component="a" href="movies/id" withBorder>
              <Card.Section>
                <Center>
                  <Image
                    sx={{ objectFit: 'scale-down' }}
                    height={200}
                    p="xs"
                    radius="md"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Uttam_Kumar_Indrani_%281958%29.png/330px-Uttam_Kumar_Indrani_%281958%29.png"
                    alt="Saregama"
                    withPlaceholder
                  />
                </Center>
              </Card.Section>
              <Card.Section>
                <Center>
                  <Text size="md" weight={600} pb="xs">
                    Uttam Kumar
                  </Text>
                </Center>
              </Card.Section>
            </Card>
          </Grid.Col>
          <Grid.Col sm={4} md={3}>
            <Card p="lg" radius="md" component="a" href="movies/id" withBorder>
              <Card.Section>
                <Center>
                  <Image
                    sx={{ objectFit: 'scale-down' }}
                    height={200}
                    p="xs"
                    radius="md"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Suchitra_Sen.jpg/330px-Suchitra_Sen.jpg"
                    alt="Saregama"
                    withPlaceholder
                  />
                </Center>
              </Card.Section>
              <Card.Section>
                <Center>
                  <Text size="md" weight={600} pb="xs">
                    Suchitra Sen
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

export default Movie;
