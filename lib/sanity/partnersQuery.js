import groq from "groq";

export const partnersQuery = groq`
  *[_type == "partners"] {
    _id,
    title,
    mainImage,
  }
`;
