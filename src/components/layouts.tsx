import { useEffect } from 'react';
import '../styles/globals.css'; // Adicione esta linha

function MyApp({ Component, pageProps }: { 
  Component: React.ComponentType; 
  pageProps: Record<string, unknown> 
}) {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', function (e: Event) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
