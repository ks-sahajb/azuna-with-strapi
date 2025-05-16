import { getStrapiMedia } from "@/utils/api-helper";
import { IStrapiImage } from "@/apis/dtos/shared-component.type";
import Image from "next/image";
import React, { FC } from "react";

const BaseStrapiImage: FC<IStrapiImage> = (props) => {
  const { url, alternativeText, width, height, documentId } = props;

  const mediaUrl = getStrapiMedia(url);

  return (
    <Image
      id={documentId}
      src={mediaUrl}
      alt={alternativeText ?? "hero image"}
      width={width}
      height={height}
    />
  );
};

export default BaseStrapiImage;
