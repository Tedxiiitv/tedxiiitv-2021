import React, { useState, useEffect } from "react";

function LazyImage({ src }) {
  const [source, setSource] = useState("images/tedxbackground.pnh");

  useEffect(() => {
    console.log(src);
    const image = new Image();
    image.src = src;
    image.onload = () => setSource(src);
  }, [src]);

  return (
    <div
      style={{
        backgroundImage: `url(${source})`,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    ></div>
  );
}

export default LazyImage;
