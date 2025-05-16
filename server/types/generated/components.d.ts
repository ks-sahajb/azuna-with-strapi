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

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    badge: Schema.Attribute.Component<'elements.badge', false>;
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'elements.servicecard', true>;
    title: Schema.Attribute.String;
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

export interface ElementsIcons extends Struct.ComponentSchema {
  collectionName: 'components_elements_icons';
  info: {
    description: '';
    displayName: 'icons';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['code', 'shopping_bag', 'smartphone', 'aperture', 'layers', 'setting']
    >;
  };
}

export interface ElementsItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    text: Schema.Attribute.Text;
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

export interface ElementsServicecard extends Struct.ComponentSchema {
  collectionName: 'components_elements_servicecards';
  info: {
    description: '';
    displayName: 'servicecard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Component<'elements.icons', false>;
    items: Schema.Attribute.Component<'elements.item', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.contact': BlocksContact;
      'blocks.footer': BlocksFooter;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.navbar': BlocksNavbar;
      'blocks.services': BlocksServices;
      'elements.badge': ElementsBadge;
      'elements.icons': ElementsIcons;
      'elements.item': ElementsItem;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.servicecard': ElementsServicecard;
    }
  }
}
