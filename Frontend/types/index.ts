export {};

declare global {
  interface Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: Info;
    image: Image;
    tags: string[];
    partype: string;
    stats: { [key: string]: number };
  }

  interface Image {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }

  interface Info {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  }
}
