import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react';

import styles from './index.module.scss';

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({})
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    )
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    )
    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
                <div className={styles.emblaSlide}>Slide 1</div>
                <div className={styles.emblaSlide}>Slide 2</div>
                <div className={styles.emblaSlide}>Slide 3</div>
            </div>
            <div className={styles.actions}>
                <button onClick={scrollPrev} disabled={prevBtnDisabled}>Prev</button>
                <button onClick={scrollNext} disabled={nextBtnDisabled}>Next</button>
            </div>
        </div>
    )
};

export default EmblaCarousel;