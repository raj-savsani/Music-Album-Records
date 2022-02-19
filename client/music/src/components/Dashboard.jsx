import axios from "axios";
import React from "react";
import { useEffect } from "react";


import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function Dashboard() {
  const [albums, setAlbums] = React.useState(false);
  // const [page, setPage] = useState(+query.get("page") || 1);
  const [album, setAlbum] = useState();
  // const query = useQuery();

  // const setCurrentPage = (event, value) => {
  //   setPage(value);
  //   history.push(`/home?page=${value}&size=${limit}`);
  // };

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
                <Link to={`/album/${el.name}`}>
                <h3 style={{paddingLeft:"30px"}}>{el.name}</h3>
                </Link>
              </div>
            );
          })
        : null}
      
    </div>
  );
}

export default Dashboard;
