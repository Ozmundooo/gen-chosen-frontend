import groq from "groq";

export const pillarsQuery = groq`
  *[_type == "pillars"]| order(date) {
    _id,
    title,
    image,
    description,
  }
`;
