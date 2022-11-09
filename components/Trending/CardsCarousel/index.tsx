import { Carousel } from '@mantine/carousel'
import { createStyles, Paper } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import React, { ReactNode } from 'react'
import { useRef } from 'react'

const useStyles = createStyles((theme) => ({
  card: {
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  carouselIndicator: {
    width: 4,
    height: 4,
    transition: 'width 250ms ease',
    '&[data-active]': {
      width: 10,
      color: 'green',
    },
  },
}))
interface CardProps {
  content?: ReactNode
}

function Card({}: CardProps) {
  const { classes } = useStyles()

  return (
    <Paper radius="md" shadow="xs" p="sm" className={classes.card}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Paper>
  )
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
]

export default function CardsCarousel() {
  const { classes } = useStyles()

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card />
    </Carousel.Slide>
  ))
  const autoplay = useRef(Autoplay({ delay: 3000 }))

  return (
    <div style={{ width: '448px', height: '200px', padding: '16px' }}>
      <Carousel
        slideSize="100%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 1 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={1}
        classNames={{
          indicator: classes.carouselIndicator,
        }}
        withControls={false}
        withIndicators={true}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </div>
  )
}
