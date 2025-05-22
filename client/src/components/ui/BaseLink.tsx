import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

import { AnchorHTMLAttributes, FC } from "react";

import Link, { LinkProps } from "next/link";

import { ILink } from "@/apis/dtos/shared-component.type";

import IconRenderer from "@/components/atoms/icons/IconRenderer";

// ======================= Component =====================
/**
 * BaseLink component
 * Renders a styled link with optional icon and intent, supporting both text and icon content types.
 */

const linkCVA = cva("", {
  variants: {
    intent: {
      navlink: "text-sm font-medium hover:text-cyan-600",
      btnlink:
        "inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50",
    },
  },
});

export type IBaseLinkCVA = VariantProps<typeof linkCVA>;

export type IBaseLinkProps = LinkProps &
  Partial<ILink> &
  IBaseLinkCVA &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    contentType?: "text" | "icon";
  };

const BaseLink: FC<IBaseLinkProps> = (props) => {
  const { className, children, intent, icon, contentType, ...other } = props;

  return (
    <Link className={clsx(linkCVA({ intent }), className)} {...other}>
      {contentType === "text" && children && children}
      {contentType === "icon" && icon && <IconRenderer name={icon?.icon} />}
      {!contentType &&
        (icon ? (
          <>
            <IconRenderer name={icon.icon} />
            {children}
          </>
        ) : (
          children
        ))}
    </Link>
  );
};

export default BaseLink;
