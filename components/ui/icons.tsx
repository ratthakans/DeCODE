import Image from "next/image";

export function OpenAI({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.8 9.5a6.4 6.4 0 00-.7-4.1 6.3 6.3 0 00-6.8-2.6 6.3 6.3 0 00-5 1.5 6.4 6.4 0 00-1.8 5.7 6.4 6.4 0 00-1.9 4.3 6.3 6.3 0 003.5 5.9 6.3 6.3 0 007.2-.6 6.4 6.4 0 002.3-5 6.3 6.3 0 003.2-5.1zM11.9 21a5 5 0 01-3.7-1.6l4.7-2.7h5.1a5 5 0 01-6.1 4.3zm-5.7-4.4a5 5 0 01-1-4l4.7 2.7v5.4a5 5 0 01-3.7-4.1zM4 11.2a5 5 0 012.7-3.6v5.4l-4.7-2.7a5 5 0 012-4.1zm11.7-6.2a5 5 0 013.7 1.6l-4.7 2.7h-5.1a5 5 0 016.1-4.3zm5.7 4.4a5 5 0 011 4l-4.7-2.7v-5.4a5 5 0 013.7 4.1zm.3 4.8a5 5 0 01-2.7 3.6v-5.4l4.7 2.7a5 5 0 01-2 4.1zM12 15.3l-2.9-1.7V10.2L12 8.5l2.9 1.7v3.4l-2.9 1.7z" />
    </svg>
  );
}

export function Supabase({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#3ECF8E" className={className}>
      <path d="M12.6 1.4L20 9.8c.8 1 .2 2.5-1.1 2.5h-5.4v9.6c0 1.2-1.3 1.7-2.1.8L4 14.2c-.8-1-.2-2.5 1.1-2.5h5.4V2.1c0-1.2 1.3-1.7 2.1-.7z" />
    </svg>
  );
}

export function NextJsIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" 
        alt="Next.js" 
        fill
        className="object-contain brightness-0 invert"
        unoptimized
      />
    </div>
  );
}

export function ClaudeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C12.5523 2 13 2.44772 13 3V8.26795L17.5622 5.63397C18.0402 5.35804 18.6517 5.52187 18.9276 5.99987C19.2036 6.47787 19.0397 7.0894 18.5617 7.36533L14 10L18.5617 12.634C19.0397 12.9099 19.2036 13.5215 18.9276 13.9995C18.6517 14.4775 18.0402 14.6413 17.5622 14.3654L13 11.732V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11.732L6.43782 14.3654C5.95982 14.6413 5.34828 14.4775 5.07235 13.9995C4.79641 13.5215 4.96025 12.9099 5.43825 12.634L10 10L5.43825 7.36533C4.96025 7.0894 4.79641 6.47787 5.07235 5.99987C5.34828 5.52187 5.95982 5.35804 6.43782 5.63397L11 8.26795V3C11 2.44772 11.4477 2 12 2Z" />
    </svg>
  );
}
