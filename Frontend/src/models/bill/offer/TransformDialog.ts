import { IBillData } from './OfferData';
import { PdfType } from '../PdfType';

export interface TransformDialog{
  offer: IBillData;
  type: PdfType;
}
