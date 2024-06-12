import React, { useState } from "react";

const Header = (props) => {
  const { colors } = props;
  const [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * colors.length));

  const handleReloadClick = () => {
    setColorIndex(Math.floor(Math.random() * colors.length));
  };

  const handlePreviousClick = () => {
    setColorIndex((((colorIndex - 1) % colors.length) + colors.length) % colors.length);
  };

  const handleNextClick = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };
  const backgroundImage = `linear-gradient(to right, ${colors[colorIndex].start}, ${colors[colorIndex].end})`;
  const style = { backgroundImage };

  return (
    <header style={style} className="p-5 bg-danger text-white text-center">
      <h1 className="display-1">Quoi de neuf, Google Fonts™&nbsp;?</h1>
      <p className="h4">
        Les plus récentes, les plus <i>trendy</i> et les plus populaires polices Google.
      </p>
      <button
        onClick={handlePreviousClick}
        aria-label="Clickez pour afficher le dégradé précédent"
        type="button"
        className="btn btn-outline-light m-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          ></path>
        </svg>
      </button>
      <button
        onClick={handleReloadClick}
        aria-label="Clickez pour changer le dégradé"
        type="button"
        className="btn btn-outline-light m-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"></path>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path>
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        aria-label="Clickez pour afficher le dégradé suivant"
        type="button"
        className="btn btn-outline-light m-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          ></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
