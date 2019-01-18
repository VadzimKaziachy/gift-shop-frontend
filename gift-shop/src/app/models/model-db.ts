export type Gift = {
  id: string
  title: string
  shortDescription: string;
  fullDescription: string;
};
export type Query = {
  allGifts: Gift[];
};

