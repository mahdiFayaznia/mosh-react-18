import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <IoMdHeart color="#ff3333" size={40} onClick={toggle} />;
  return <IoIosHeartEmpty color="#ff3333" size={40} onClick={toggle} />;
};

export default Like;
