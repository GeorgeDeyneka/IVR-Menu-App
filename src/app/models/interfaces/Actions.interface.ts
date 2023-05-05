export interface ActionsFormData {
  title: string;
  values: Array<OptionValue>;
}

interface OptionValue {
  value: string;
  name: string;
}
