import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Paper, createStyles, Group } from '@mantine/core'
import MoreButton from '../Common/MoreButton'
const useStyles = createStyles(() => ({
  card: {
    height: 448,
    width: 200,
  },
}))

interface CardProps {
  icon: string | StaticImageData
  title: string
  data?: string
}

const Card = ({ icon, title }: CardProps) => {
  const { classes } = useStyles()

  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <Group position="apart">
        <Group>
          {icon && <Image src={icon} width={20} height={20} alt="logo" />}
          <p style={{ fontWeight: 'bold' }}>{title}</p>
        </Group>
        <MoreButton />
      </Group>
      <Group>1</Group>
      <Group>2</Group>
    </Paper>
  )
}

const CardsCarousel = () => {
  return (
    <div>
      <Card icon=".." title="Trending" />
    </div>
  )
}

export default CardsCarousel
