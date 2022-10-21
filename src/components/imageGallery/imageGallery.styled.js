import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.modalBgColor};
  z-index: 1200;
`;

export const ModalEL = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: ${p => p.theme.colors.accent};
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.searchFormBgColor};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const FormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/512/2319/2319177.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &&:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.md};
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  &&::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.space[6]}px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryItem = styled.li`
  border-radius: ${p => p.theme.radii.mini};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &&:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ButtonLoadMore = styled.button`
  padding: 8px 16px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.mini};
  background-color: ${p => p.theme.colors.searchFormBgColor};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${p => p.theme.colors.accent};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.space[5]}px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &&:hover,
  &&:focus {
    background-color: ${p => p.theme.colors.btnLoadMoreBgColor};
  }
`;
