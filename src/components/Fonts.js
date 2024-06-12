import { useState, useEffect } from "react";
import CardFont from "./CardFont";
import Sidebar from "./Sidebar";

// importer le site de google gérer le cash

const Fonts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789"); // pour changer l'input text
  const [size, setSize] = useState(19); // pour changer la taille des inputs text
  const [sort, setSort] = useState("date"); // pour changer la page de préférence

  const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLEFONT_API_KEY}&sort=${sort}`;

  useEffect(() => {
    setLoading(true);
    fetch(url) // demande à l'api de récupérer les infos
      .then((response) => {
        // on traite une première fois la réponse (pending)
        setLoading(true);
        if (!response.ok) {
          throw new Error(`Oups 😬, il y a un problème dans la lecture des polices`);
        }
        return response.json(); // on va pouvoir lire le site sous format .json
      })
      .then((data) => {
        console.log(data);
        setData(data.items.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sort, url]);

  return (
    <div className="row my-5">
      <Sidebar text={text} setText={setText} size={size} setSize={setSize} setSort={setSort} />
      <div className="col-lg-9">
        <section className="row mb-5">
          <h2 className="mb-3">
            {sort === "date" && <span className="badge bg-danger">Les plus récentes</span>}
            {sort === "popularity" && <span className="badge bg-success">Les plus populaires</span>}
            {sort === "trending" && <span className="badge bg-primary">Top 10 trending</span>}
          </h2>
          {data.map((el) => {
            return (
              <CardFont
                key={el.family}
                text={text}
                name={el.family}
                variants={el.variants}
                cat={el.category}
                file={el.files.regular}
                size={size}
              />
            );
          })}
          {loading && <p>Loading...</p>}
          {error && <p>Error system failure</p>}
        </section>
      </div>
    </div>
  );
};

export default Fonts;
