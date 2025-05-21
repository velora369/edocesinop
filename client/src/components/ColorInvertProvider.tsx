import { useEffect } from 'react';
import '../styles/color-invert.css';

// Componente que gerencia a inversão de cores
export default function ColorInvertProvider() {
  useEffect(() => {
    // Função para aplicar o efeito de inversão de cores
    const applyColorInversion = () => {
      // Seleciona todos os elementos que precisam do efeito de inversão
      const invertElements = document.querySelectorAll<HTMLElement>(
        '.btn, button, .product-card, a[href], .size-button, .nav-link, .social-link'
      );
      
      invertElements.forEach(element => {
        // Adiciona a classe para inversão de cor se ainda não tiver
        if (!element.classList.contains('color-invert')) {
          element.classList.add('color-invert');
          
          // Captura as cores originais
          const computedStyle = window.getComputedStyle(element);
          const bgColor = computedStyle.backgroundColor;
          const textColor = computedStyle.color;
          
          // Define as variáveis CSS personalizadas para cada elemento
          if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') {
            element.style.setProperty('--bg-color', bgColor);
          }
          if (textColor) {
            element.style.setProperty('--text-color', textColor);
          }
          
          // Adiciona evento de clique para feedback visual
          element.addEventListener('click', function() {
            // Não previne o comportamento padrão para não afetar navegação
            // Adiciona classe temporária para efeito visual
            element.classList.add('clicked');
            
            // Remove a classe após a animação
            setTimeout(() => {
              element.classList.remove('clicked');
            }, 300);
          });
        }
      });
    };

    // Aplica o efeito inicial
    applyColorInversion();

    // Configurar um MutationObserver para detectar mudanças no DOM
    const observer = new MutationObserver(() => {
      // Quando o DOM mudar, reaplicar o efeito
      applyColorInversion();
    });

    // Iniciar a observação das mudanças no DOM
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Limpeza ao desmontar o componente
    return () => {
      observer.disconnect();
    };
  }, []);

  // Este componente não renderiza nada no DOM
  return null;
}