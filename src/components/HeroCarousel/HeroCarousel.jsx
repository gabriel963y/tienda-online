import { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import useCategories from '../../hooks/useCategories.js';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';
import styles from './HeroCarousel.module.css';

export default function HeroCarousel() {
    const { categories, loading } = useCategories();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 45 }, [
        Autoplay({ delay: 7000, stopOnInteraction: false }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;

        const tweenScale = (api) => {
            const engine = api.internalEngine();
            const scrollProgress = api.scrollProgress();
            const snaps = api.scrollSnapList();
            const isScrollSnapLoop = snaps.length > 1;

            snaps.forEach((scrollSnap, index) => {
                let diffToTarget = scrollSnap - scrollProgress;

                if (
                    isScrollSnapLoop &&
                    engine.options.loop &&
                    engine.slideLooper &&
                    engine.slideLooper.loopPoints
                ) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target();
                        if (index === loopItem.index && target !== 0) {
                            const sign = Math.sign(target);
                            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
                            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
                        }
                    });
                }

                // Normalizar la diferencia según el intervalo entre snaps
                const factor = snaps.length > 1 ? snaps.length - 1 : 1;
                const normalizedDiff = diffToTarget * factor;

                const tweenValue = 1 - Math.abs(normalizedDiff) * 0.15; // Escala hasta 0.85
                const scale = Math.min(Math.max(tweenValue, 0.85), 1);
                const opacity = Math.min(Math.max(tweenValue, 0.4), 1); // Opacidad hasta 0.4

                const slideNode = api.slideNodes()[index];
                if (slideNode) {
                    const gridNode = slideNode.firstElementChild;
                    if (gridNode) {
                        gridNode.style.transform = `scale(${scale})`;
                        gridNode.style.opacity = opacity.toString();
                    }
                }
            });
        };

        const onScroll = () => tweenScale(emblaApi);

        // Deferir la actualización de estado para cumplir con la regla de renders en cascada
        setTimeout(() => {
            if (!emblaApi) return;
            setScrollSnaps(emblaApi.scrollSnapList());
            tweenScale(emblaApi);
        }, 0);

        emblaApi.on('scroll', onScroll);
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', () => {
            onSelect();
            tweenScale(emblaApi);
        });

        return () => {
            emblaApi.off('scroll', onScroll);
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, setScrollSnaps, onSelect]);

    useEffect(() => {
        const handleScroll = () => {
            document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Agrupamos categorías de a 3 (1 grande + 2 chicas)
    const slides = [];
    for (let i = 0; i < categories.length; i += 3) {
        slides.push(categories.slice(i, i + 3));
    }

    if (loading) {
        return (
            <Container className="my-5">
                <div className={styles.loadingContainer}>
                    <div className={styles.spinner} />
                    <span className={styles.loadingText}>Cargando categorías</span>
                </div>
            </Container>
        );
    }

    return (
        <Container className="mt-4 mb-5 position-relative">
            {/* Background Ambient Glows */}
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: '450px',
                    height: '450px',
                    top: '-150px',
                    left: '-150px',
                    background: 'var(--accent-primary)',
                    filter: 'blur(130px)',
                    opacity: 'var(--login-glow-opacity-primary)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: '450px',
                    height: '450px',
                    bottom: '-150px',
                    right: '-150px',
                    background: 'var(--accent-secondary)',
                    filter: 'blur(130px)',
                    opacity: 'var(--login-glow-opacity-secondary)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className={styles.wrapper}>
                <div className={styles.embla} ref={emblaRef}>
                    <div className={styles.emblaContainer}>
                        {slides.map((grupo, i) => (
                            <div className={styles.emblaSlide} key={i}>
                                <div className={styles.grid}>
                                    {/* Card grande — primera categoría del grupo */}
                                    {grupo[0] && (
                                        <Link
                                            to={`/productos?categoria=${grupo[0].slug}`}
                                            className={`${styles.card} ${styles.cardLarge}`}
                                        >
                                            <img src={grupo[0].image} alt={grupo[0].name} />
                                            <div className={styles.overlay}>
                                                <span
                                                    className={`${styles.tag} ${styles.tagPrimary}`}
                                                >
                                                    EXCLUSIVO
                                                </span>
                                                <div className={styles.cardContent}>
                                                    <h2 className={styles.cardTitle}>
                                                        {grupo[0].name}
                                                    </h2>
                                                    <p className={styles.cardDesc}>
                                                        {grupo[0].description}
                                                    </p>
                                                    <span className={styles.shopNow}>
                                                        COMPRAR AHORA{' '}
                                                        <FiArrowRight
                                                            className={styles.arrowIcon}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    )}

                                    {/* Cards chicas — segunda y tercera categoría */}
                                    <div className={styles.smallCards}>
                                        {grupo[1] && (
                                            <Link
                                                to={`/productos?categoria=${grupo[1].slug}`}
                                                className={`${styles.card} ${styles.cardSmall}`}
                                            >
                                                <img src={grupo[1].image} alt={grupo[1].name} />
                                                <div className={styles.overlay}>
                                                    <span
                                                        className={`${styles.tag} ${styles.tagAccent}`}
                                                    >
                                                        NUEVO
                                                    </span>
                                                    <div className={styles.cardContent}>
                                                        <h2 className={styles.cardTitle}>
                                                            {grupo[1].name}
                                                        </h2>
                                                        <p className={styles.cardDesc}>
                                                            {grupo[1].description}
                                                        </p>
                                                        <span className={styles.shopNow}>
                                                            COMPRAR AHORA{' '}
                                                            <FiArrowRight
                                                                className={styles.arrowIcon}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        )}
                                        {grupo[2] && (
                                            <Link
                                                to={`/productos?categoria=${grupo[2].slug}`}
                                                className={`${styles.card} ${styles.cardSmall}`}
                                            >
                                                <img src={grupo[2].image} alt={grupo[2].name} />
                                                <div className={styles.overlay}>
                                                    <span
                                                        className={`${styles.tag} ${styles.tagMuted}`}
                                                    >
                                                        TENDENCIA
                                                    </span>
                                                    <div className={styles.cardContent}>
                                                        <h2 className={styles.cardTitle}>
                                                            {grupo[2].name}
                                                        </h2>
                                                        <p className={styles.cardDesc}>
                                                            {grupo[2].description}
                                                        </p>
                                                        <span className={styles.shopNow}>
                                                            COMPRAR AHORA{' '}
                                                            <FiArrowRight
                                                                className={styles.arrowIcon}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicador de progreso del Carrusel */}
                <div className={styles.progressContainer}>
                    {scrollSnaps.map((_, idx) => (
                        <button
                            key={idx}
                            className={`${styles.progressSegment} ${idx === selectedIndex ? styles.segmentActive : ''}`}
                            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                            aria-label={`Ir a la diapositiva ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}
