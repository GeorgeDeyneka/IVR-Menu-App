import { ActionsFormData, ActionsTableData } from '../interfaces/Actions.interface';

export const BASE_SELECT: Array<ActionsFormData> = [
  {
    title: 'Action',
    formControlName: 'matchedAction',
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
    formControlName: 'matchedData',
    values: [
      {
        value: 'invalid',
        name: 'Invalid',
      },
    ],
  },
  {
    title: 'Set status',
    formControlName: 'leadStatus',
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

const FORM_DATA_INVALID: ActionsTableData = {
  required: true,
  id: 2,
  data: [
    {
      title: 'Button',
      formControlName: 'name',
      values: [
        {
          value: 'invalid',
          name: 'Invalid',
        },
      ],
    },
    ...BASE_SELECT,
  ],
};

const FORM_DATA_TIMEOUT: ActionsTableData = {
  required: true,
  id: 2,
  data: [
    {
      title: 'Button',
      formControlName: 'name',
      values: [
        {
          value: 'timeout',
          name: 'Timeout',
        },
      ],
    },
    ...BASE_SELECT,
  ],
};

export const FORM_DATA: Array<ActionsTableData> = [
  FORM_DATA_INVALID,
  FORM_DATA_TIMEOUT,
];
