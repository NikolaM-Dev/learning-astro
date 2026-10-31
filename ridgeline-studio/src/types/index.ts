import type { SvgComponent } from "astro/types";

export type Stat = {
  description: string;
  title: string;
};

export type Feature = {
  description: string;
  icon: SvgComponent & ImageMetadata;
  title: string;
};
