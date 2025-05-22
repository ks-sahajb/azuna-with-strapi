import React, { FC } from "react";

import Image, { ImageProps } from "next/image";

import { getStrapiMedia } from "@/apis/api-helper";
import { IStrapiImage } from "@/apis/dtos/shared-component.type";

export type IBaseStrapiImageProps = IStrapiImage & {
  imageProps?: Partial<ImageProps>;
};

// ======================= Component =====================
/**
 * BaseStrapiImage component
 * Renders an image from Strapi with proper handling for responsive and accessibility.
 */

const BaseStrapiImage: FC<IBaseStrapiImageProps> = (props) => {
  const { url, alternativeText, width, height, documentId, imageProps } = props;

  const mediaUrl = getStrapiMedia(url);

  return (
    <Image
      id={documentId}
      {...imageProps}
      src={mediaUrl}
      alt={alternativeText ?? "hero image"}
      width={width}
      height={height}
    />
  );
};

export default BaseStrapiImage;
