import Vue, { PluginFunction } from "vue";

declare const VueMorph: VueMorph;
export default VueMorph;
export interface VueMorph {
  install: PluginFunction<any>;
  version: string;
}
