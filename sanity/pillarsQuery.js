import groq from "groq";

export const pillarsQuerys = groq`
  *[_type == "pillars"] {
    _id,
    title,
    image,
    description,
  }
`;
