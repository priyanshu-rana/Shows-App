import State from "./store";

export const showsSelector = (s: State) => {
  const showIds = s.shows.againstQuery[s.shows.query] || [];

  return showIds.map((id) => s.shows.entities[id]);
};
export const showsQuerySelector = (s: State) => s.shows.query;
