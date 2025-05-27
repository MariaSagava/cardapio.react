import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Performance optimization: usar createRoot com concurrent features
const container = document.getElementById('root');
const root = createRoot(container);

// Remover loading inicial se existir
const removeInitialLoading = () => {
  const loadingElement = document.querySelector('.initial-loading');
  if (loadingElement) {
    loadingElement.style.opacity = '0';
    setTimeout(() => {
      loadingElement.remove();
    }, 300);
  }
};

// Usar concurrent rendering para melhor performance
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove loading após renderização
setTimeout(removeInitialLoading, 100);

// Service Worker registration para cache (opcional)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Performance monitoring simples (sem dependências externas)
const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      // Measure key timing metrics
      const navigation = performance.getEntriesByType('navigation')[0];
      const paintEntries = performance.getEntriesByType('paint');
      
      if (navigation) {
        console.log('Performance Metrics:');
        console.log(`DOM Content Loaded: ${navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart}ms`);
        console.log(`Page Load: ${navigation.loadEventEnd - navigation.loadEventStart}ms`);
      }
      
      paintEntries.forEach(entry => {
        console.log(`${entry.name}: ${entry.startTime}ms`);
      });
    });
  }
};

measurePerformance();