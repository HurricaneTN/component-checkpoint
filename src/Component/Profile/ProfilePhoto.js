import React from "react";
import myImage from "../../ProfilePhoto/me.jpg";
import { Image } from "react-bootstrap";

export const Photo = () => {
  return (
    <div>
      <Image src={myImage} />
    </div>
  );
};
