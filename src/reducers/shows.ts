import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import {
  SHOW_CAST_FETCHED,
  SHOW_FETCH,
  SHOW_FETCHED,
  SHOW_LIST_FETCH,
  SHOW_LIST_FETCHED,
} from "../actions";
import { Actor } from "../models/actor";
import { Show } from "../models/Show";

type State = {
  entities: { [id: number]: Show };
  againstQuery: { [q: string]: number[] };
  query: string;
  showLoading: { [showId: number]: boolean };
  queryLoading: boolean;
  actors: { [showId: number]: number[] };
};

const initialState: State = {
  entities: {},
  againstQuery: {},
  query: "",
  showLoading: {},
  queryLoading: false,
  actors: {},
};

export const showReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FETCH:
      return {
        ...state,
        showLoading: { [action.payload]: true },
      };

    case SHOW_FETCHED:
      const show: Show = action.payload;
      return {
        ...state,
        entities: { ...state.entities, [show.id]: show },
        showLoading: { [show.id]: false },
      };

    case SHOW_LIST_FETCH:
      return { ...state, query: action.payload, queryLoading: true };

    case SHOW_LIST_FETCHED:
      const { query, shows } = action.payload as {
        query: string;
        shows: Show[];
      };

      const showEntity = new schema.Entity("shows");
      const normalized = normalize(shows, [showEntity]);
      const normalizedShows = normalized.entities.shows;

      const ids = normalized.result;

      return {
        ...state,
        entities: { ...state.entities, ...normalizedShows },
        againstQuery: { ...state.againstQuery, [query]: ids },
        queryLoading: false,
      };

    case SHOW_CAST_FETCHED:
      const { showId, actors } = action.payload as {
        showId: number;
        actors: Actor[];
      };
      const actorIds = actors.map((a) => a.id);

      return {
        ...state,
        actors: { ...state.actors, [showId]: actorIds },
      };

    default:
      return state;
  }
};
