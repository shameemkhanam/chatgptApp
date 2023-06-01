import { Injectable } from '@angular/core';
import { OpenAIApi, Configuration } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: "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",
  });

  constructor() {
    this.openai = new OpenAIApi(this.configuration);
  }

  generateText(prompt: string):Promise<string | undefined>{
   return this.openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        max_tokens: 256
      }).then(response => {
        return response.data.choices[0].text;
      }).catch(error=>{
        return '';
      });
  }}
