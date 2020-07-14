/**
 * @license
 * 
 * Copyright (c) 2020, Hoàng Văn Khải. (MIT Licensed)
 * https://github.com/KSXGitHub/yaml-wasm
 */
import init, { parse } from 'https://deno.land/x/yaml_wasm@0.1.9/index.js';

export class Yaml {

  /**
   * Parse YAML text into Javascript object.
   * @param text YAML plain text
   */
  public static parseYaml(text: string): any {
    let [metadata] = parse(text, undefined);
    return metadata;
  }

  /**
   * Initialize WASM.
   */
  public static async initYaml(): Promise<any> {
    await init(undefined);
  }

}