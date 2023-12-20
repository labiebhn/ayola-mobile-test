export type InputTextType = 'default' | 'password';
export type InitialFormType = {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: any;
  required?: boolean;
  error?: boolean;
  message?: string;
  type?: InputTextType;
  [key: string]: any;
};
