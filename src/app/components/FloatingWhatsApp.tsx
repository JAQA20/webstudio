export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/50683965806?text=Hola%20Javier%2C%20quiero%20cotizar%20un%20proyecto%20web"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-15 w-15 items-center justify-center rounded-full border border-white/15 bg-[#25D366] text-white shadow-[0_20px_50px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_24px_60px_rgba(37,211,102,0.5)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="relative z-10 h-7 w-7 fill-current"
      >
        <path d="M19.11 17.23c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.31-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.33.97 2.62 1.1 2.8.13.18 1.91 2.92 4.62 4.09.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.83-1.28.22-.63.22-1.16.16-1.28-.07-.12-.25-.2-.52-.34Z" />
        <path d="M16.03 3.2c-7 0-12.69 5.68-12.69 12.66 0 2.23.59 4.42 1.71 6.34L3.2 28.8l6.77-1.77a12.7 12.7 0 0 0 6.06 1.54h.01c6.99 0 12.68-5.68 12.68-12.66 0-3.38-1.32-6.56-3.72-8.95A12.6 12.6 0 0 0 16.03 3.2Zm0 23.22h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.5 10.5 0 0 1-1.62-5.58c0-5.84 4.77-10.59 10.64-10.59 2.84 0 5.51 1.1 7.51 3.09a10.52 10.52 0 0 1 3.12 7.5c0 5.84-4.77 10.59-10.65 10.59Z" />
      </svg>
    </a>
  );
}
