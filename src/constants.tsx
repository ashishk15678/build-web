const { GoogleGenerativeAI } = require("@google/generative-ai");
const apikey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apikey);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function useModel(msg: string) {
  const result = await fetch("http://localhost:3000/api/getmsg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: msg,
    }),
  });
  const res = await result.json();
  return res;
  //   console.log({ result: await res });
}