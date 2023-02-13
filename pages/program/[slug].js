import React from "react";
import { sanityClient, urlFor } from "../../lib/sanity/client";
import { programPageQuery } from "../../lib/sanity/programPageQuery";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
export default function program({ title, mainImage, content, imagesGallery }) {
  const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => (
        <h1 className="text-md  font-['Poppins']">{children}</h1>
      ),
      normal: ({ children }) => (
        <p className="text-md  font-['Poppins'] mb-4 lg:mb-6">{children}</p>
      ),
    },
  };
  return (
    <>
      <div className="mb-8">
        <div class="relative ">
          <img
            src={urlFor(mainImage)}
            className="opacity-[80%] brightness-50 object-cover h-[30vh] xl:h-[45vh] w-full"
          />
          <h1 class="absolute top-1/2 ml-8 lg:ml-16 xl:ml-20  -translate-y-1/2 text-3xl lg:text-4xl font-['Raleway'] text-white font-semibold">
            {title}
          </h1>
        </div>
      </div>
      <div className="mx-5 mb-8 lg:ml-20 lg:w-[80vw]">
        <h3 className="text-xl font-bold lg:text-2xl font-['Raleway'] py-2">
          {title}
        </h3>
        <PortableText value={content} components={components} />
        {imagesGallery.map((image) => (
          <img className="my-4 " src={urlFor(image)}></img>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const program = await sanityClient.fetch(programPageQuery, { pageSlug });

  if (!program) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: program.title,
        mainImage: program.mainImage,
        content: program.content,
        imagesGallery: program.imagesGallery,
      },
    };
  }
};
