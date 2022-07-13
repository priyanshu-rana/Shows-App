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
import Header from "./Header";
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
    <div>
      <div>
        {shows && (
          <div className="px-8 py-4 space-y-4 ">
            <div className="flex justify-between items-center ">
              <Header />
              {loading && <Spinner />}
              <input
                placeholder="search"
                value={query}
                onChange={handleChange}
                className="border-red-500 w-1/3 text-blue-600 font-semibold border-2 bg-gray-300 rounded-lg p-1 placeholder:text-xl focus:ring-2 focus:ring-offset-2 focus:ring-red-500 "
              />
            </div>
            <div className=" flex flex-wrap justify-center  sm:space-y-3 sm:space-x-3 ">
              {shows.map((s) => (
                <ShowRow key={s.id} show={s} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
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
