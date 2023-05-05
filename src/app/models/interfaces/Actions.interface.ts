export interface ActionsFormData {
  title: string;
  formControlName: string;
  values: Array<OptionValue>;
}

interface OptionValue {
  value: string;
  name: string;
}
