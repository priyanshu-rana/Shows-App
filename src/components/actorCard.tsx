import { FC, memo } from "react";
import { Actor } from "../models/actor";

type actorCardProps = {
  actor: Actor;
};

const actorCard: FC<actorCardProps> = ({ actor }) => {
  return (
    <div className="flex flex-col  items-center justify-center sm:px-2 py-3 rounded-lg bg-neutral-800 m-2">
      <img
        src={actor.image.medium}
        className="rounded-full w-20 h-20 object-cover"
      />
      <h1>{actor.name}</h1>
    </div>
  );
};

actorCard.defaultProps = {};

export default memo(actorCard);
