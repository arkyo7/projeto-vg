import { useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Caminho futuro da imagem, ex: /images/hero-vieg-beaute.webp */
  src: string;
  alt: string;
  /** Proporção CSS, ex: "4 / 3" */
  ratio?: string;
  className?: string;
  imageClassName?: string;
  rounded?: string;
  priority?: boolean;
  objectPosition?: string;
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
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);
  const fileName = src.split("/").pop() ?? src;

  const style: CSSProperties = { aspectRatio: ratio };

  return (
    <div
      style={style}
      className={cn(
        "relative w-full overflow-hidden border border-border bg-background-secondary/60",
        rounded,
        className,
      )}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...(priority ? { fetchPriority: "high" as const } : {})}
          onError={() => setFailed(true)}
          className={cn("absolute inset-0 h-full w-full object-cover", imageClassName)}
          style={{ objectPosition }}
        />
      )}

      {failed && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center"
        >
          <span className="h-px w-10 bg-gold/60" />
          <span className="font-heading text-lg tracking-[0.2em] text-primary-light">VG</span>
          <span className="font-body text-[10px] tracking-[0.12em] text-text-secondary/70">
            {fileName}
          </span>
        </div>
      )}
    </div>
  );
}
