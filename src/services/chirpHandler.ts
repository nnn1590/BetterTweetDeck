import {HandlerOf} from '../types';
import {TweetDeckColumnMediaPreviewSizesEnum} from './columnMediaSizes';

export interface ChirpHandlerPayload {
  uuid: string;
  chirp: any;
  urls: any[];
  columnMediaSize: TweetDeckColumnMediaPreviewSizesEnum;
  columnKey: string;
}

export interface ChirpRemovedPayload {
  uuidArray: string[];
}

type SetupChirpHandler = (
  handlerOnAdd: HandlerOf<ChirpHandlerPayload>,
  handlerOnRemove: HandlerOf<ChirpRemovedPayload>
) => void;

export const setupChirpHandler: SetupChirpHandler = (handlerOnAdd, handlerOnRemove) => {
  //
};
