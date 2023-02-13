import groq from "groq";

export const teamQuery = groq`
  *[_type == "ourteam"] {
    _id,
    title,
    type,
    image,
    content,
  }
`;
