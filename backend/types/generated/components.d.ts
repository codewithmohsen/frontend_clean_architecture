import type { Schema, Attribute } from '@strapi/strapi';

export interface RatingZeroToFiveStars extends Schema.Component {
  collectionName: 'components_rating_zero_to_five_stars';
  info: {
    displayName: 'zero-to-five-stars';
    icon: 'star';
  };
  attributes: {
    rate: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 5;
        },
        number
      >;
    count: Attribute.BigInteger &
      Attribute.SetMinMax<
        {
          min: '0';
        },
        string
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'rating.zero-to-five-stars': RatingZeroToFiveStars;
    }
  }
}
