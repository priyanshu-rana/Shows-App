export type Actor = {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: Date;
  deathday: null;
  gender: string;
  image: {
    original: string;
    medium: string;
  };
  updated: number;
  _links: Links;
};

type Links = {
  self: Self;
};

type Self = {
  href: string;
};

type Country = {
  name: string;
  code: string;
  timezone: string;
};
