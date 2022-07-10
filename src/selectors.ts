import { createSelector } from "reselect";
import State from "./store";

const showStateSelector = (s: State) => s.shows;

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

// export const showsQuerySelector = (s: State) => s.shows.query;   better approch is to use createSelector

// export const showsSelector = (s: State) => {
//   const showIds = s.shows.againstQuery[s.shows.query] || [];
//   return showIds.map((id) => s.shows.entities[id]);
// };

// export const showsSelector = createSelector(
//   showsAgainstQuerySelector,
//   showsQuerySelector,
//   showEntitiesSelector,
//   (againstQuery, query, entities) => {
//     const showIds = againstQuery[query];

//     return showIds.map((id) => entities[id]);
//   }
// );
