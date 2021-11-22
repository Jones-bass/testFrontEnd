import React from "react";
import "./styles.css";
import Data from "../../data.json";

function Post() {
  return (
    <div>
      <div>
        {Data.map((post) => {
          return (
            <>
              <div className="contained-column">
                <img src="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"></img>
                <div>
                  <h2>{post.title}</h2>
                  <p><span className="span-border">{post.type}</span>{post.date}</p>
                  <p>{post.description}</p>
                </div>
                <div className="column-icon">
                  <img src="/images/icon1.svg" alt="01" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
