interface FailedGptResponse {
  success: false;
  finish_reason: string;
}

interface SuccessfulGptResponse {
  success: true;
  message: string;
}

type GptResponse = FailedGptResponse | SuccessfulGptResponse;
