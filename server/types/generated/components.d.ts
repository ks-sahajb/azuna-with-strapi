import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContact extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    mobile: Schema.Attribute.String;
  };
}

export interface BlocksFooter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    contact: Schema.Attribute.Component<'blocks.contact', false>;
    copyright: Schema.Attribute.String;
    ctitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    externallinks: Schema.Attribute.Component<'elements.link', true>;
    links: Schema.Attribute.Component<'elements.link', true>;
    linktitle: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    badge: Schema.Attribute.Component<'elements.badge', false>;
    button: Schema.Attribute.Component<'elements.link', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksNavbar extends Struct.ComponentSchema {
  collectionName: 'components_blocks_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    link: Schema.Attribute.Component<'elements.link', true>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
  };
}

export interface ElementsBadge extends Struct.ComponentSchema {
  collectionName: 'components_elements_badges';
  info: {
    displayName: 'Badge';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.contact': BlocksContact;
      'blocks.footer': BlocksFooter;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.navbar': BlocksNavbar;
      'elements.badge': ElementsBadge;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
