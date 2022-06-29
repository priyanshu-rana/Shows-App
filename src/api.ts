import axios from "axios";
import { Show } from "./models/Show";

type ShowObj = {
  show: Show;
};

export const getShows = async (query: string) => {
  const response = await axios.get<ShowObj[]>(
    "https://api.tvmaze.com/search/shows?q=" + query
  );
  return response.data.map((d) => d.show);
};
//as data contain 2keys score and show , in this consion we need show , so, we use map here
