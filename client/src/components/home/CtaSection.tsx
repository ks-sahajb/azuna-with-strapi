import { Mail, MapPin, PhoneCall } from "react-feather";

import { FC } from "react";

import { ICTASection } from "@/apis/dtos/blocks-component.type";

export type ICtaSectionProps = { data: ICTASection };

const CtaSection: FC<ICtaSectionProps> = (props) => {
  const { badge, title, description, contact } = props.data;

  return (
    <section id="contact" className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-medium text-cyan-800 shadow-sm">
              {badge.text}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{description}</p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 shadow-sm">
                  <PhoneCall size={19} />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">{contact.mobile}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 shadow-sm">
                  <Mail size={19} />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">{contact.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 shadow-sm">
                  <MapPin size={19} />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">{contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
