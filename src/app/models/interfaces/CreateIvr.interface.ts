export interface CreateFormObject extends CommonFormFields {
  timeout: number;
  invalidRetries: number;
}

export interface CreateFormValues extends CommonFormFields {
  timeout: string;
  invalidRetries: string;
}

interface CommonFormFields {
  name: string;
  description: string;
  announcement: string;
}
