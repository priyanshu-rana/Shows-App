import { FC, memo } from "react";
import { Actor } from "../models/actor";

type ActorCardProps = {
  actor: Actor;
};

const ActorCard: FC<ActorCardProps> = ({ actor }) => {
  return (
    <div className="flex flex-col sm:w-32   items-center justify-center sm:px-2 py-3 rounded-lg bg-neutral-800 m-2">
      <img
        src={actor.image.medium}
        className="rounded-full sm:w-20 sm:h-20 object-cover"
      />
      <h1>{actor.name}</h1>
    </div>
  );
};

ActorCard.defaultProps = {};

export default memo(ActorCard);
