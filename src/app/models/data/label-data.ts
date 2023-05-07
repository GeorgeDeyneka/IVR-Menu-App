import { ButtonLabel, IvrLabel } from '../interfaces/Labels.interface';

export const BUTTON_DATA_LABELS: ButtonLabel[] = [
  { label: 'Button', prop: 'name' },
  { label: 'Action', prop: 'matchedAction' },
  { label: 'Data', prop: 'matchedData' },
  { label: 'Status', prop: 'leadStatus' },
  { label: 'ID', prop: 'id' },
  { label: 'IVR menu ID', prop: 'ivrId' },
];

export const IVR_DATA_LABELS: IvrLabel[] = [
  { label: 'Name', prop: 'name' },
  { label: 'Description', prop: 'description' },
  { label: 'Announcement', prop: 'announcement' },
  { label: 'Timeout', prop: 'timeout' },
  { label: 'Invalid Retries', prop: 'invalidRetries' },
];
