import { Card, Text, Button, Group, createStyles } from '@mantine/core'
import MoreButton from '../Common/MoreButton'
import btc from '../../assets/btc.png'
import Image from 'next/image'

const useStyles = createStyles(() => ({
  card: {
    height: '200px',
    width: '100%',
    padding: '16px',
  },
}))

// interface TrendingCard {
//   icon?: string | StaticImageData
//   title?: string
// }

function Demo() {
  const { classes } = useStyles()

  return (
    <div style={{ height: '200px', width: '448px', padding: '16px' }}>
      <Card radius="md" shadow="xs" p="sm" withBorder className={classes.card}>
        {/* <Card.Section component="a" href="https://mantine.dev/">
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section> */}
        <Card.Section>
          <Group position="apart" ml="xs" mr="xs">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {btc && <Image src={btc} width={20} height={20} alt="logo" />}
              &nbsp;&nbsp;
              <p style={{ fontWeight: 'bold' }}>Trending</p>
            </div>

            <MoreButton />
          </Group>
        </Card.Section>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </div>
  )
}

export default Demo
