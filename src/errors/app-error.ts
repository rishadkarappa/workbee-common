// A custom error class YOUR code throws deliberately, with structured info
export class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 500,
    public readonly code?: string
  ) {
    super(message);
    this.name = 'AppError';
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

// Narrow an unknown catch value down to a safe, loggable message.
// This is the ONE function every catch block in every service should call.
export function getErrorMessage(error: unknown, fallback = 'Something went wrong'): string {
  if (error instanceof AppError) return error.message;
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return fallback;
}

// Optionally also expose statusCode/code if the caller wants to branch on it
export function getErrorDetails(error: unknown): { message: string; statusCode: number; code?: string } {
  if (error instanceof AppError) {
    return {
      message: error.message,
      statusCode: error.statusCode,
      ...(error.code !== undefined && { code: error.code }),
    };
  }
  if (error instanceof Error) {
    return { message: error.message, statusCode: 500 };
  }
  return { message: 'Something went wrong', statusCode: 500 };
}