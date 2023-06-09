export class AppError extends Error {
  public code: number;

  public error: Error;

  constructor(code: number, message: string, error?: Error) {
    super(message);

    this.code = code;
    this.error = error ? error : new Error();
  }

  public toModel() {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(20000, message);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, error?: Error) {
    super(30000, message, error);
  }
}

export class FieldValidationError extends AppError {
  public fields: IFieldError[];

  constructor(message: string, fields: IFieldError[], error?: Error) {
    super(30001, message, error);
    this.fields = fields;
  }

  public toModel() {
    return {
      code: this.code,
      fields: this.fields,
      message: this.message,
    };
  }
}

export class UnauthorizedError extends AppError {
  constructor(error?: Error) {
    super(30002, 'Unauthorized user', error);
  }
}

export class PermissionError extends AppError {
  constructor(error?: Error) {
    super(30003, 'Permission denied', error);
  }
}

export class MissingEnvironmentVariable extends AppError {
  constructor(variableName: string, error?: Error) {
    super(30004, `Missing environment variable "${variableName}"`, error);
  }
}

export interface IFieldError {
  message: string;
  type: string;
  path: string[];
}

export enum ErrorCodes {
  DUPLICATE_ERROR = '23505',
}
