import React, { FC } from "react";

import Image, { ImageProps } from "next/image";

import { getStrapiMedia } from "@/apis/api-helper";
import { IStrapiImage } from "@/apis/dtos/shared-component.type";

export type IBaseStrapiImageProps = IStrapiImage & {
  imageProps?: Partial<ImageProps>;
};

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
