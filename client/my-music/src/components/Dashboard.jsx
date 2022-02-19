import axios from "axios";
import React from "react";
import { useEffect } from "react";

function Dashboard() {
  const [albums, setAlbums] = React.useState(false);
  const [page, setPage] = React.useState(0);
  console.log("albums:", albums);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = () => {
    axios
      .get("http://localhost:2345/album")
      .then((res) => {
        // console.log("res:", res);
        setAlbums(res.data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="albums">
      {albums
        ? albums.album.map((el) => {
            return (
              <div className="album-img-div" key={el._id}>
                <img src={el.album_img} alt=""></img>
                <h3>{el.name}</h3>
              </div>
            );
          })
        : null}
      {albums
        ? albums.total_pages((el, i) => {
            <button key={i} onlicks={() => setPage(i + 1)}></button>;
          })
        : null}
    </div>
  );
}

export default Dashboard;
