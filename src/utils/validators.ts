export type ValidationType = (value: string) => string | undefined;
// REQUIRED FIELD
export const required: ValidationType = (value) =>
  value ? undefined : "Required";
// CONTROL MAX LENGTH
export const maxLength = (max: number): ValidationType => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
