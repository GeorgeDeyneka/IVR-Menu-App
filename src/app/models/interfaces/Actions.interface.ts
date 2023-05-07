export interface ActionsTableData {
  required: boolean;
  id: number;
  data: Array<ActionsFormData>;
}

export interface ActionsFormData {
  title: string;
  formControlName: string;
  values: Array<OptionValue>;
}

export interface ActionsFormValues {
  name: string;
  matchedAction: string;
  matchedData: string;
  leadStatus: string;
}

export interface OptionValue {
  value: string;
  name: string;
}
