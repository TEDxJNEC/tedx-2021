import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const portalRoot = document.body;
  const mountElement = useMemo(() => document.createElement('dialog'), []);
  mountElement.setAttribute('open', 'true');
  useEffect(() => {
    portalRoot.appendChild(mountElement);
    return () => {
      portalRoot.removeChild(mountElement);
    };
  }, [mountElement, portalRoot]);
  return createPortal(children, mountElement);
};

export default Portal;
