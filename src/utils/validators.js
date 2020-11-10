// REQUIRED FIELD
export const required = (value) => (value ? undefined : "Required");
// CONTROL MAX LENGTH 
export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
