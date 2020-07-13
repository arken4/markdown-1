import init, { parse } from 'https://deno.land/x/yaml_wasm@0.1.9/index.js';

export class Yaml {
  static text: string = "";
  static initialized: boolean = false;

  /**
   * parseYaml
   */
  public static parseYaml(text: string): any {
    let [metadata] = parse(text, undefined);
    return metadata;
  }

  public static async initYaml(): Promise<any> {
    await init(undefined);
  }

  public static async concat(text: string) {
    this.text = this.text.concat(text);
  }

}