import React, { useRef } from 'react';

import Portal from 'components/Portal';
import useClickOutside from 'hooks/useClickOutside';
import useLockBodyScroll from 'hooks/useLockBodyScroll';
import styled from 'styled-components';

export const devices = {
  tablet: '768px',
  laptop: '1200px',
};
const breakpoints = {
  mobile: `(max-width: ${devices.tablet})`,
  tablet: `(min-width: ${devices.tablet})`,
  laptop: `(min-width: ${devices.laptop})`,
};
const ModalWidths = {
  normal: 540,
  wide: 900,
  extraWide: 1050,
};

export const ModalStyles = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  background-color: hsl(0, 0%, 16%);
  z-index: ${1000};
  border-radius: 10px;
  width: 90%;
  padding: 20px;
  bottom: 0px;
  left: 50%;
  right: 50%;
  @media ${breakpoints.laptop} {
    width: ${({ size }) => size}px;
    padding: 32px;
    height: auto;
    overflow-y: scroll;
    overflow-x: hidden;
    top: 50%;
    bottom: unset;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000070;
  z-index: ${1000};
`;

export const ModalHeading = styled.p`
  color: #fff;
  font-weight: bold;
  line-height: 36px;
  margin: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: ${({ heading }) => (heading ? 'space-between' : 'flex-end')};
`;

const Modal = ({ children, isOpen, onClose }) => {
  const ref = useRef(null);

  const handleClickOutside = () => {
    onClose();
  };

  useClickOutside(ref, handleClickOutside);
  useLockBodyScroll(isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <OverlayStyles />
      <ModalStyles ref={ref} size={ModalWidths.wide}>
        {children}
      </ModalStyles>
    </Portal>
  );
};

export { Modal };
