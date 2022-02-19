import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Album() {
  const [songs, setSongs] = useState(false);
  console.log("songs:", songs);

  let { name } = useParams();

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = () => {
    axios
      .get(`http://localhost:2345/album/${name}`)
      .then(({ data }) => {
        // console.log("res:", data);
        setSongs(data.songs);
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <h1>Albums</h1>
      {songs
        ? songs.map((s) => {
            return (
              <div className="albums-songs" key={s._id}>
                <div>
                  <img src={s.poster[0]} alt="" />
                </div>
                <div>
                  <h3>{s.name}</h3>
                  <p>Year: {s.album_id.year}</p>
                </div>
                <div>
                  <h5>Duration: {s.duration}</h5>
                </div>
                <div>
                  <h5>{s.album_id.genre}</h5>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Album;
