import { ActionsFormData } from '../interfaces/Actions.interface';

const BASE_SELECT: Array<ActionsFormData> = [
  {
    title: 'Action',
    values: [
      {
        value: 'play-audio',
        name: 'Play Audio',
      },
      {
        value: 'queue',
        name: 'Queue',
      },
      {
        value: 'extension',
        name: 'Extension',
      },
    ],
  },
  {
    title: 'Play On',
    values: [
      {
        value: 'invalid',
        name: 'Invalid',
      },
    ],
  },
  {
    title: 'Set status',
    values: [
      {
        value: 'disabled',
        name: 'Disabled',
      },
      {
        value: 'enabled',
        name: 'Enabled',
      },
    ],
  },
];

const FORM_DATA_INVALID: Array<ActionsFormData> = [
  {
    title: 'Button',
    values: [
      {
        value: 'invalid',
        name: 'Invalid',
      },
    ],
  },
  ...BASE_SELECT,
];

const FORM_DATA_TIMEOUT: Array<ActionsFormData> = [
  {
    title: 'Button',
    values: [
      {
        value: 'timeout',
        name: 'Timeout',
      },
    ],
  },
  ...BASE_SELECT,
];

export const FORM_DATA: Array<ActionsFormData[]> = [
  FORM_DATA_INVALID,
  FORM_DATA_TIMEOUT,
];
