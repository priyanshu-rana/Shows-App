import { createSelector } from "reselect";
import { Actor } from "./models/actor";
import State from "./store";

const showStateSelector = (s: State) => s.shows;
const actorStateSelector = (s: State) => s.actors;

export const showEntitiesSelector = createSelector(
  showStateSelector,
  (ShowState) => ShowState.entities
);

const showsAgainstQuerySelector = createSelector(
  showStateSelector,
  (ShowState) => ShowState.againstQuery
);

export const showsQuerySelector = createSelector(
  showStateSelector,
  (ShowState) => ShowState.query
);

const showIdsSelector = createSelector(
  showsAgainstQuerySelector,
  showsQuerySelector,
  (againstQuery, query) => againstQuery[query] || []
);

export const showsSelector = createSelector(
  showIdsSelector,
  showEntitiesSelector,
  (ids, entities) => ids.map((id) => entities[id])
);

export const showLoadingSelector = createSelector(
  showStateSelector,
  (showState) => showState.showLoading
);

export const queryLoadingSelector = createSelector(
  showStateSelector,
  (showState) => showState.queryLoading
);

export const actorEntitiesSelector = createSelector(
  actorStateSelector,
  (actorState) => actorState.entities
);

export const showActorIdsSelector = createSelector(
  showStateSelector,
  (showState) => showState.actors
);

export const showActorsSelector = createSelector(
  showActorIdsSelector,
  actorEntitiesSelector,
  (showActorIds, actorEntities) => {
    return Object.keys(showActorIds).reduce<{ [id: number]: Actor[] }>(
      (showActors, showId) => {
        const actorIds = showActorIds[+showId];
        const actors = actorIds.map((id) => actorEntities[id]);
        return { ...showActors, [+showId]: actors };
      },
      {}
    );
  }
);
