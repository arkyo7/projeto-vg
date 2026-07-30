import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Caminho futuro da imagem, ex: /images/hero-vieg-beaute.webp */
  src: string;
  alt: string;
  /** Proporção CSS, ex: "4 / 3". Use undefined para controlar altura por classes. */
  ratio?: string;
  className?: string;
  imageClassName?: string;
  rounded?: string;
  priority?: boolean;
  objectPosition?: string;
  /** Zoom suave no hover (desativado com prefers-reduced-motion) */
  zoom?: boolean;
};

/**
 * Reserva exatamente o espaço da futura imagem.
 * Enquanto o arquivo não existir, exibe um placeholder elegante com o nome esperado.
 */
export function ImagePlaceholder({
  src,
  alt,
  ratio = "4 / 3",
  className,
  imageClassName,
  rounded = "rounded-3xl",
  priority = false,
  objectPosition = "center",
  zoom = false,
}: ImagePlaceholderProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const style: CSSProperties | undefined = ratio ? { aspectRatio: ratio } : undefined;

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div
      style={style}
      className={cn(
        "group/img relative w-full overflow-hidden border border-border bg-background-secondary/60",
        rounded,
        className,
      )}
    >

      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center transition-opacity duration-500",
          loaded && "opacity-0",
        )}
      >
        <span className="h-px w-10 bg-gold/60" />
        <span className="font-heading text-lg tracking-[0.2em] text-primary-light">VG</span>
      </div>


      <img
        ref={imgRef}
        src={src}
        alt={loaded ? alt : ""}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        onLoad={(event) => {
          if (event.currentTarget.naturalWidth > 0) setLoaded(true);
        }}
        onError={() => setLoaded(false)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          imageClassName,
        )}
        style={{ objectPosition }}
      />
    </div>
  );
}
