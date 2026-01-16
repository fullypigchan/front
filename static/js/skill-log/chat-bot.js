import OpenAI from "openai";

const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-5,2",
    input: "이 페이지의 내용을 요약해줘",
});

console.log(response);
