import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showListFetchAction } from "../actions";
import { Show } from "../models/Show";

import {
  queryLoadingSelector,
  showsQuerySelector,
  showsSelector,
} from "../selectors";
import State from "../store";
import ShowRow from "./ShowRow";
import Spinner from "./Spinner";

type ShowsListProps = {
  query: string;
  shows: Show[];
  fetchShows: (query: string) => void;
  loading: boolean;
};

const ShowsList: FC<ShowsListProps> = ({
  shows,
  fetchShows,
  query,
  loading,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetchShows(event.target.value);
  };

  return (
    <>
      {loading && <Spinner />}
      {shows && (
        <div className="px-8 py-4 space-y-4 relative">
          <input
            placeholder="search"
            value={query}
            onChange={handleChange}
            className="border-blue-600 border-4 rounded-lg p-1 placeholder:text-xl"
          />
          {shows.map((s) => (
            <ShowRow key={s.id} show={s} />
          ))}
        </div>
      )}
    </>
  );
};

ShowsList.defaultProps = {};

const mapStateToProps = (s: State) => ({
  shows: showsSelector(s),
  query: showsQuerySelector(s),
  loading: queryLoadingSelector(s),
});

const mapDispatchToProps = {
  fetchShows: showListFetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowsList));
