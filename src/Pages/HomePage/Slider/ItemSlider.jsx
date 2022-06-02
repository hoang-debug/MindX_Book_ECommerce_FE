import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Book2 from "../../BookPage/Book2";
import './ItemSlider.css'
import SliderItem from "./SliderItem";

const responsive = {
  xl: {
    breakpoint: {
      max: 3000,
      min: 1536
    },
    items: 7,
    partialVisibilityGutter: 40
  },
  lg: {
    breakpoint: {
      max: 1536,
      min: 1200
    },
    items: 6,
    partialVisibilityGutter: 30
  },
  md: {
    breakpoint: {
      max: 1200,
      min: 900
    },
    items: 5,
    partialVisibilityGutter: 20
  },
  sm: {
    breakpoint: {
      max: 900,
      min: 600
    },
    items: 4,
    partialVisibilityGutter: 0
  },
  xs: {
    breakpoint: {
      max: 600,
      min: 0
    },
    items: 2,
    partialVisibilityGutter: 0
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    zIndex: 2,
  },
  header: {
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'baseline',
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(0),
    paddingTop: theme.spacing(1),
    position: 'relative'
  },
  seeMore: {
    '&:hover': {
      color: '#C7511F',
    }
  }
}))

const ItemSlider = ({label, link, items, maxWidth = '1480px'}) => {
  const classes = useStyles()
  return (
    <div className={classes.root} style={{maxWidth: maxWidth}}>
      <div className={classes.header}>
        <Typography variant='h6' style={{ fontWeight: '500' }}>
          {label}
        </Typography>
        {link && (
          <Typography
            variant="body2"
            color="primary"
            style={{ cursor: 'pointer' }}
            onClick={() => { console.log(link); window.open(link) }}
            className={classes.seeMore}
          >
            See more {'>'}
          </Typography>
        )}
      </div>
      {/* <Divider /> */}
      {/* <Box marginTop={2} /> */}
      <Box paddingX={7} position='relative'>

        <Carousel
          additionalTransfrom={0}
          autoPlay={false}
          shouldResetAutoplay={false}
          autoPlaySpeed={0}
          centerMode={false}
          draggable
          focusOnSelect={false}
          infinite={false}
          minimumTouchDrag={0}
          responsive={responsive}
          showDots={false}
          slidesToSlide={5}
          swipeable
          renderDotsOutside
          className="slider"
        >
          {items.map((item, index) => (
            <Book2
              key={index}
              sale_price={item.sale_price}
              old_price={item.old_price}
              img_url={item.img_url}
              label={item.label}
              sale_start={item.sale_start}
              sale_end={item.sale_end}
              link={item.link}
              rating={item.rating}
              elevation={0}
            />
          ))}
        </Carousel>
      </Box>
    </div>
  )
}

ItemSlider.defaultProps = {
  label: '',
  items: [],
  link: '',
}

export default ItemSlider