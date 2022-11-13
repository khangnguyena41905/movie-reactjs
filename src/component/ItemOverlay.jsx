import styled from "styled-components";

export const ItemOverlay = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 22rem;
  width: 100%;
  .image {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .overlay1 {
    position: absolute;
    inset: 0;
    background: rgba(100, 100, 100, 0.458);
    z-index: 1;
    top: 100%;
    transition: all 0.3s linear;
    color: white;
  }
  .overlay2 {
    position: absolute;
    width: 120%;
    height: 30%;
    top: -25%;
    left: -75%;
    background: rgba(228, 228, 228, 0.155);
    z-index: 2;
    backdrop-filter: blur(8px);
    rotate: -45deg;
    transition: all 0.3s linear;
  }
  &:hover {
    .overlay1 {
      top: 0;
      transition: all 0.3s linear;
    }
    .overlay2 {
      top: 100%;
      left: 30%;
      width: 200%;
      transition: all 0.3s linear;
    }
  }
`;
