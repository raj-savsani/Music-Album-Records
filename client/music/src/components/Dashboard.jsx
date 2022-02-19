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
  console.log("albums:", albums);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(1);
  console.log("totalpage:", totalpage);
  const [album, setAlbum] = useState();
  // const query = useQuery();

  // const setCurrentPage = (event, value) => {
  //   setPage(value);
  //   history.push(`/home?page=${value}&size=${limit}`);
  // };

  // useEffect(() => {
  //   getAlbums();
  // }, []);

  useEffect(() => {
    getAlbums();
  }, [page]);

  let pg = [];

  for (let i = 1; i <= totalpage; i++) {
    pg.push(i);
  }

  const getAlbums = () => {
    axios
      .get(`http://localhost:2345/album/?Page=${page}`)
      .then((res) => {
        // console.log("res:", res.data.total_pages);
        setAlbums(res.data);
        setTotalpage(res.data.total_pages);
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div className="albums">
        {albums
          ? albums.album.map((el) => {
              return (
                <div className="album-img-div" key={el._id}>
                  <img src={el.album_img} alt=""></img>
                  <Link to={`/album/${el.name}`}>
                    <h3 style={{ paddingLeft: "30px" }}>{el.name}</h3>
                  </Link>
                </div>
              );
            })
          : null}
      </div>

      <div >
        {totalpage
          ? pg.map((el, i) => {
              return (
                <button key={i} onClick={() => setPage(el)}>
                  {el}
                </button>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Dashboard;
