import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, FC } from "react";

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
  IBaseLinkCVA &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const BaseLink: FC<IBaseLinkProps> = (props) => {
  const { className, children, intent, ...other } = props;

  return (
    <Link className={clsx(linkCVA({ intent }), className)} {...other}>
      {children}
    </Link>
  );
};

export default BaseLink;
