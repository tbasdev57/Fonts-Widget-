import React from "react";

const Sidebar = ({ text, setText, size, setSize, setSort }) => {
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  return (
    <div className="col-lg-3 mb-4">
      <div style={{ position: "sticky", top: 0 }}>
        <label className="form-label fw-bold mb-2" htmlFor="sort">
          Afficher des polices
        </label>
        <select id="sort" className="form-select mb-4" onChange={handleSortChange}>
          <option value="date">Les plus récentes</option>
          <option value="popularity">Les plus populaires</option>
          <option value="trending">Top 10 trending</option>
        </select>
        <div className="mb-3">
          <label htmlFor="text" className="form-label fw-bold mb-3">
            Tapez votre texte
          </label>
          <textarea className="form-control" id="text" value={text} onChange={handleChangeText}></textarea>
        </div>
        <label htmlFor="range" className="form-label fw-bold mb-3">
          La taille de police
        </label>
        <input
          id="range"
          type="range"
          className="form-range"
          min="8"
          max="48"
          step="1"
          value={size}
          onChange={handleSizeChange}
        ></input>
      </div>
    </div>
  );
};

export default Sidebar;
