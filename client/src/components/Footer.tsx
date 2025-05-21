import { IFooter } from "@/apis/dtos/globals.type";
import BaseLink from "@/components/ui/BaseLink";
import React, { FC } from "react";
import { Mail, MapPin, PhoneCall } from "react-feather";

export type IFooterProps = IFooter;

const Footer: FC<IFooterProps> = (props) => {
  const {
    links,
    linktitle,
    contact,
    copyright,
    externallinks,
    description,
    logo,
    ctitle,
  } = props;

  return (
    <footer className="w-full bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-col gap-10 lg:flex-row lg:gap-0">
          <div className="lg:w-1/2">
            <h3 className="mb-4 text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {logo.text}
              </span>
            </h3>
            <p className="mb-4 text-gray-400">{description}</p>
            <div className="flex space-x-4">
              {externallinks.map((link) => (
                <BaseLink
                  href={link.href}
                  icon={link.icon}
                  key={link.id}
                  contentType="icon"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {link.text}
                </BaseLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {linktitle}
            </h3>
            <ul className="space-y-2 text-gray-400">
              {links.map((link) => (
                <li key={link.id}>
                  <BaseLink
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.text}
                  </BaseLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{ctitle}</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-400" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-start">
                <PhoneCall className="mr-2 h-5 w-5 text-gray-400" />
                <span>{contact.mobile}</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <span>{contact.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
