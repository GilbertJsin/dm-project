import React from 'react';
import TextDisplay from './TextDisplay';

export default {
  title: 'Components/TextDisplay',
  component: TextDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Default story with title and short text
export const Default = {
  args: {
    title: 'Character Description',
    text: 'A brief description of the character would go here.',
  },
};

// Long text example
export const LongText = {
  args: {
    title: 'Character Background',
    text: `Tester is a stout dwarf paladin with a thick beard and battle-worn armor. Known for his steadfast loyalty and unwavering courage, he has sworn an oath to protect the innocent and uphold justice throughout the realm.

Born in the mountain stronghold of Ironforge, Tester spent his early years learning the art of smithing from his father. However, after witnessing a brutal attack on his village by marauding orcs, he pledged his life to the service of the Light.

For decades, he has traveled across the land, righting wrongs and defending those who cannot defend themselves. His hammer, "Trueheart," is said to glow with divine radiance when evil creatures are near.

Despite his gruff exterior, those who know him well speak of his kindness and generosity. He may not be quick to smile, but he is always first to offer aid to those in need.  Tester is a stout dwarf paladin with a thick beard and battle-worn armor. Known for his steadfast loyalty and unwavering courage, he has sworn an oath to protect the innocent and uphold justice throughout the realm.

Born in the mountain stronghold of Ironforge, Tester spent his early years learning the art of smithing from his father. However, after witnessing a brutal attack on his village by marauding orcs, he pledged his life to the service of the Light.

For decades, he has traveled across the land, righting wrongs and defending those who cannot defend themselves. His hammer, "Trueheart," is said to glow with divine radiance when evil creatures are near.

Despite his gruff exterior, those who know him well speak of his kindness and generosity. He may not be quick to smile, but he is always first to offer aid to those in need. Tester is a stout dwarf paladin with a thick beard and battle-worn armor. Known for his steadfast loyalty and unwavering courage, he has sworn an oath to protect the innocent and uphold justice throughout the realm.

Born in the mountain stronghold of Ironforge, Tester spent his early years learning the art of smithing from his father. However, after witnessing a brutal attack on his village by marauding orcs, he pledged his life to the service of the Light.

For decades, he has traveled across the land, righting wrongs and defending those who cannot defend themselves. His hammer, "Trueheart," is said to glow with divine radiance when evil creatures are near.

Despite his gruff exterior, those who know him well speak of his kindness and generosity. He may not be quick to smile, but he is always first to offer aid to those in need.`,
  },
};

// Without title
export const NoTitle = {
  args: {
    text: 'This example shows the component without a title.',
  },
};