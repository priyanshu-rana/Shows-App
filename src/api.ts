import axios from "axios";
import { Actor } from "./models/actor";
import { Show } from "./models/Show";

type ShowObj = {
  show: Show;
};

export const getShow = async (showId: number) => {
  const response = await axios.get<Show>(
    "https://api.tvmaze.com/shows/" + showId
  );

  return response.data;
};

export const getShowList = async (query: string) => {
  const response = await axios.get<ShowObj[]>(
    "https://api.tvmaze.com/search/shows?q=" + query
  );
  return response.data.map((d) => d.show);
};
//as data contain 2keys score and show , in this condition we need show , so, we use map here

export const getShowCast = async (showId: number) => {
  const response = await axios.get<{ person: Actor }[]>(
    "https://api.tvmaze.com/shows/" + showId + "/cast"
  );
  return response.data;
};
