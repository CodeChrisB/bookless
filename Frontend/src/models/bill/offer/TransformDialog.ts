import { IBillData } from './OfferData';
import { PdfType } from '../PdfType';

export interface TransformDialog{
  billData: IBillData;
  type: PdfType;
}
