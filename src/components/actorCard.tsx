import { FC, memo } from "react";
import { Actor } from "../models/actor";

type ActorCardProps = {
  actor: Actor;
};

const ActorCard: FC<ActorCardProps> = ({ actor }) => {
  return (
    <div className="flex flex-col sm:w-32   items-center justify-center sm:px-2 py-3 rounded-lg bg-neutral-800 m-2">
      <img
        src={
          actor.image?.medium ||
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
        }
        className="rounded-full sm:w-20 sm:h-20 object-cover"
      />
      <h1>{actor.name}</h1>
    </div>
  );
};

ActorCard.defaultProps = {};

export default memo(ActorCard);
