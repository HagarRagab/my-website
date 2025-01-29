import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Blurhash } from "react-blurhash";

function ImageComponent({ src, mobSrc, alt, hash }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    const { ref } = useInView({
        root: null,
        threshold: [0, 1],
        rootMargin: "200px",
        onChange: (inView) => {
            if (inView) setShouldLoad(true);
        },
    });

    useEffect(() => {
        if (!shouldLoad) return;
        const image = new Image();
        const handleLoadingImage = () => setImgLoaded(true);
        image.addEventListener("load", handleLoadingImage);
        image.src = src;

        return () => image.removeEventListener("load", handleLoadingImage);
    }, [shouldLoad, src]);

    return (
        <>
            <div
                style={{
                    display: imgLoaded ? "none" : "inline",
                }}
                ref={ref}
            >
                <Blurhash
                    hash={hash}
                    width="100%"
                    height="100%"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
            {shouldLoad && (
                <picture>
                    <source srcSet={mobSrc} media="(max-width: 768px)" />
                    <source srcSet={src} />
                    <img
                        src={src}
                        alt={alt}
                        style={{ display: !imgLoaded ? "none" : "inline" }}
                    />
                </picture>
            )}
        </>
    );
}

export default ImageComponent;
