import { model } from '@/models/Langchain';

export async function simpleTest() {
  const chat = await model.invoke('Why do cats meow?');
  console.log(chat.content);
}