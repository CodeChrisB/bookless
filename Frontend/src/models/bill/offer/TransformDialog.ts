import { IOfferData } from './OfferData';
import { PdfType } from '../PdfType';

export interface TransformDialog{
  offer: IOfferData;
  type: PdfType;
}
