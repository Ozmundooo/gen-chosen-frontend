import groq from "groq";

export const boardQuery = groq`
  *[_type == "ourboard"] {
    _id,
    title,
    image,
    content,
  }
`;
