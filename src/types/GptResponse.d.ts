interface FailedGptResponse {
  success: false;
  finish_reason?: string;
  error_message?: string;
}

interface GptChoice {
  message: any;
  success: true;
  finish_reason: string;
}

type GptResponse = GptChoice | FailedGptResponse;
