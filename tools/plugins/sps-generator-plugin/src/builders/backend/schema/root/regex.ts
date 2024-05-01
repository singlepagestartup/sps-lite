export const getExportSchemaContentRegex = (
  ...props: [string, string, string]
) => {
  const [f, s, t] = props;

  return new RegExp(
    `export {([\\s]+?)?${f},([\\s]+?)?${s},([\\s]+?)?} from "${t}";`,
  );
};
