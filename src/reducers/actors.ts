import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOW_CAST_FETCH, SHOW_CAST_FETCHED } from "../actions";
import { Actor } from "../models/actor";

type State = {
  entities: { [id: number]: Actor };
};

const initialState = {
  entities: {},
};

export const actorReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CAST_FETCHED:
      const actorEntity = new schema.Entity("actors");
      const normalized = normalize(action.payload.actors, [actorEntity]);

      const normalizedActors = normalized.entities.actors;
      return {
        ...state,
        entities: { ...state.entities, ...normalizedActors },
      };

    default:
      return state;
  }
};
