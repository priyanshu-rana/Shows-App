export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  rating: { average: number };
  weight: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
};
