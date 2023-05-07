export interface CreateFormObject extends CommonFormFields {
  id: number;
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
