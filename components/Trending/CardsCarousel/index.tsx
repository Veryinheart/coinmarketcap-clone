import { Carousel } from '@mantine/carousel'
import { createStyles } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import { useRef } from 'react'
import TopAccounts from './TopAccounts'
import TopPosts from './TopPosts'
import TopArticle from './TopArticle'

const useStyles = createStyles((theme) => ({
  card: {
    height: 200,
    width: 448,
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colorScheme === 'dark' ? '#323546' : '#ffffff',
  },
  carouselIndicator: {
    width: 4,
    height: 4,
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: 16,
    },
  },
}))

export default function CardsCarousel() {
  const { classes } = useStyles()
  const autoplay = useRef(Autoplay({ delay: 3000 }))

  return (
    <div
      style={{ width: 448, height: 200, display: 'flex', overflow: 'hidden' }}
    >
      <Carousel
        slideSize="100%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 1 }]}
        slideGap="sm"
        align="start"
        slidesToScroll={1}
        classNames={{
          indicator: classes.carouselIndicator,
        }}
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide key="accounts">
          <TopAccounts />
        </Carousel.Slide>
        <Carousel.Slide key="posts">
          <TopPosts />
        </Carousel.Slide>
        <Carousel.Slide key="articles">
          <TopArticle />
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
