export interface Ivr {
  id: number;
  name: string;
  description: string;
  announcement: string;
  timeout: number;
  invalidRetries: number;
  appendInvalidRetryRecording: boolean;
  appendAnnouncementToTimeout: boolean;
  timeoutRetries: number;
  timeoutRetryRecording: string;
  timeoutRecording: string;
  timeoutDestination: string;
  ivrEntityList: IvrEntity[];
}

interface IvrEntity {
 id: number;
 name: string;
 matchedAction: string;
 matchedData: string;
 ivrId: number;
 leadStatus: string;
}
