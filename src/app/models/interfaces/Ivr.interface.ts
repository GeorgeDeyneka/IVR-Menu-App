import { CreateFormObject } from './CreateIvr.interface';

export interface Ivr extends CreateFormObject {
  appendInvalidRetryRecording?: boolean;
  appendAnnouncementToTimeout?: boolean;
  timeoutRetries?: number;
  timeoutRetryRecording?: string;
  timeoutRecording?: string;
  timeoutDestination?: string;
  ivrEntityList: IvrEntity[];
}

export interface IvrEntity {
  id: number;
  name: string;
  matchedAction: string;
  matchedData: string;
  ivrId: number;
  leadStatus: string;
}
