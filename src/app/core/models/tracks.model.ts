import { IArtistModel } from "./artists.model";

export interface ITrackModel {
  name: string;
  album: string;
  cover: string;
  duration?: number;
  url: string;
  _id: string | number;
  artists?: IArtistModel
}