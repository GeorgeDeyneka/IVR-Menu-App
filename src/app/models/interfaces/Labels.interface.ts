import { CreateFormObject } from './CreateIvr.interface';
import { IvrEntity } from './Ivr.interface';

export interface ButtonLabel {
  label: string;
  prop: keyof IvrEntity;
}

export interface IvrLabel {
  label: string;
  prop: keyof CreateFormObject;
}
