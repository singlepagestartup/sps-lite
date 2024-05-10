export class RegexCreator {
  onCreate: {
    regex: RegExp;
    content: string;
  };
  onRemove: {
    regex: RegExp;
    content: string;
  };

  /**
   * @param place - The place where the content will be added and what
   * will be stayed after removing the content.
   * ```
   * "export const routes = {"
   * ```
   * @param placeRegex - The regex pattern to find the place.
   * ```
   * new RegExp(`export const routes = {`)
   * ```
   * @param content - The content that will be added.
   * ```
   * `"${route}": ${asPropertyModelName},`
   * ```
   * @param contentRegex - The regex pattern to find the content.
   * ```
   * new RegExp(`"${route}":([\\s]+?)${asPropertyModelName},`)
   * ```
   * @param type - The type of adding the content. Default is "append".
   * If "append" the content will be added after the place.
   */
  constructor({
    place,
    placeRegex,
    content,
    contentRegex,
    type = "append",
  }: {
    place: string;
    placeRegex: RegExp;
    content: string;
    contentRegex: RegExp;
    type?: "append" | "prepend";
  }) {
    const onCreateContent =
      type === "append" ? `${place}${content}` : `${content}${place}`;

    this.onCreate = {
      regex: placeRegex,
      content: onCreateContent,
    };
    this.onRemove = {
      regex: contentRegex,
      content: "",
    };
  }
}
