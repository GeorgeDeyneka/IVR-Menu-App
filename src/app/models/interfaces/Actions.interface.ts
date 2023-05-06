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

interface OptionValue {
  value: string;
  name: string;
}
