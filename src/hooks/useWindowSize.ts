import { useState, useEffect } from 'react';

type PropsUseWindow = {
    width: number | undefined
    height: number | undefined
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<PropsUseWindow>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Função que atualiza o estado com o tamanho atual da janela
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Adiciona o listener do evento resize
    window.addEventListener('resize', handleResize);

    // Chama a função para definir o tamanho inicial
    handleResize();

    // Remove o listener do evento resize quando o componente é desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []); // [] garante que o efeito só rode ao montar e desmontar

  return windowSize;
}