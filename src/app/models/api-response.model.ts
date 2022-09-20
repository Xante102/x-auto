export interface APIResponse<T = any> {
  // Response status message
  status: string;

  // Success responses
  results?: number;

  token?:string;

  data?: { [key: string]: T };

  // Error responses
  message?: string;
  error?: any;
}

// This utility interface allows us to type our API responses.  It has the status which is of type string, the results which is number, data which has an index signature which is a typescript feature that allows us to select any arbituary property and give it  a type. For errors, we get back a message of type string and the actual error.
