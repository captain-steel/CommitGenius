import axios, { AxiosResponse } from 'axios';
import { startProgress, stopProgress } from '../tools/progressBar';

export async function callGpt(query: string): Promise<GptResponse> {
  try {
    startProgress();
    const { data }: AxiosResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4-0125-preview', // 'gpt-4' or 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: query }],
        n: 1,
        stream: false,
        temperature: 0.5,
        presence_penalty: 0,
        frequency_penalty: 0
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    stopProgress();
    const result = data.choices[0] as GptChoice;

    if (result.finish_reason !== 'stop') {
      return {
        success: false,
        finish_reason: result.finish_reason
      };
    }

    return {
      success: true,
      message: result.message.content,
      finish_reason: result.finish_reason
    };
  } catch (error: any) {
    stopProgress();
    return handleError(error);
  }
}

function handleError(error: any): FailedGptResponse {
  if (error?.response?.data?.error?.type === 'invalid_request_error') {
    return {
      success: false,
      error_message: error?.response?.data?.error?.message
    };
  } else {
    return {
      success: false,
      error_message: 'An unexpected error occurred. Please try again later.'
    };
  }
}
