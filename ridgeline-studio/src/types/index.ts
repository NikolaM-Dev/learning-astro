import type { SvgComponent } from "astro/types";

export type Feature = {
  description: string;
  icon: SvgComponent & ImageMetadata;
  title: string;
};
