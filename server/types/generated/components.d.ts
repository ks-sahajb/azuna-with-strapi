import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContact extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contacts';
  info: {
    description: '';
    displayName: 'contact';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    icon: Schema.Attribute.Component<'elements.icons', false>;
    mobile: Schema.Attribute.String;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    badge: Schema.Attribute.Component<'elements.badge', false>;
    contact: Schema.Attribute.Component<'blocks.contact', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    externallinks: Schema.Attribute.Component<'elements.link', true>;
    links: Schema.Attribute.Component<'elements.link', true>;
    linktitle: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false> &
      Schema.Attribute.Required;
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

export interface BlocksHistoryTab extends Struct.ComponentSchema {
  collectionName: 'components_blocks_history_tabs';
  info: {
    displayName: 'HistoryTab';
  };
  attributes: {
    Tab: Schema.Attribute.Component<'blocks.tab', false>;
    Timeline: Schema.Attribute.Component<'elements.history-item', true>;
  };
}

export interface BlocksMissonTab extends Struct.ComponentSchema {
  collectionName: 'components_blocks_misson_tabs';
  info: {
    description: '';
    displayName: 'MissionTab';
  };
  attributes: {
    Features: Schema.Attribute.Component<'elements.feature', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Tab: Schema.Attribute.Component<'blocks.tab', false>;
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

export interface BlocksTab extends Struct.ComponentSchema {
  collectionName: 'components_blocks_tabs';
  info: {
    displayName: 'tab';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTeamTab extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_tabs';
  info: {
    description: '';
    displayName: 'TeamTab';
  };
  attributes: {
    Members: Schema.Attribute.Component<'elements.member', true>;
    Tab: Schema.Attribute.Component<'blocks.tab', false>;
  };
}

export interface BlocksTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
  };
  attributes: {
    badge: Schema.Attribute.Component<'elements.badge', false>;
    description: Schema.Attribute.Text;
    reviews: Schema.Attribute.Component<'elements.review', true>;
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

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Component<'elements.icons', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsHistoryItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_history_items';
  info: {
    description: '';
    displayName: 'TimelineItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Component<'elements.icons', false>;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
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
      [
        'code',
        'shopping_bag',
        'smartphone',
        'aperture',
        'layers',
        'setting',
        'star',
        'facebook',
        'linkedin',
        'instagram',
        'framer',
        'shield',
        'users',
        'award',
        'globe',
        'watch',
      ]
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
    description: '';
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Component<'elements.icons', false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ElementsMember extends Struct.ComponentSchema {
  collectionName: 'components_elements_members';
  info: {
    displayName: 'Member';
  };
  attributes: {
    icon: Schema.Attribute.Component<'elements.icons', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    info: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface ElementsReview extends Struct.ComponentSchema {
  collectionName: 'components_elements_reviews';
  info: {
    description: '';
    displayName: 'review';
  };
  attributes: {
    author: Schema.Attribute.String;
    company: Schema.Attribute.Text;
    profile: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.Text;
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
      'blocks.cta': BlocksCta;
      'blocks.footer': BlocksFooter;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.history-tab': BlocksHistoryTab;
      'blocks.misson-tab': BlocksMissonTab;
      'blocks.navbar': BlocksNavbar;
      'blocks.services': BlocksServices;
      'blocks.tab': BlocksTab;
      'blocks.team-tab': BlocksTeamTab;
      'blocks.testimonials': BlocksTestimonials;
      'elements.badge': ElementsBadge;
      'elements.feature': ElementsFeature;
      'elements.history-item': ElementsHistoryItem;
      'elements.icons': ElementsIcons;
      'elements.item': ElementsItem;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.member': ElementsMember;
      'elements.review': ElementsReview;
      'elements.servicecard': ElementsServicecard;
    }
  }
}
