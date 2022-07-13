import { FC, memo } from "react";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="p-2">
      <h1>
        <span className="text-green-500 font-bold text-5xl font-mono">
          Shows
        </span>
        <span className="text-red-500 font-bold text-5xl font-mono">-</span>
        <span className="text-yellow-500 font-bold text-5xl font-mono">
          App
        </span>
      </h1>
    </div>
  );
};

Header.defaultProps = {};

export default memo(Header);
