import { getExportSchemaContentRegex } from "./regex";

describe(`export { Relations, Table, } from "@sps/sps-website-builder-backend-schema-relations";`, () => {
  const first = "PagesToLayoutsRelations";
  const second = "PagesToLayoutsTable";
  const third = "@sps/sps-website-builder-backend-schema-relations";

  it(`should match the regex 1`, () => {
    const regex = getExportSchemaContentRegex(first, second, third);

    const string = `export {
        ${first},
        ${second},
    } from "${third}";
    export {
        PageTable,
        PageRelations,
      } from "@sps/sps-website-builder-models-page-backend-schema";`;

    expect(string).toMatch(regex);
  });

  it(`should match the regex 2`, () => {
    const regex = getExportSchemaContentRegex(first, second, third);

    const string = `export { ${first}, ${second}, } from "${third}";
    export {
        PageTable,
        PageRelations,
      } from "@sps/sps-website-builder-models-page-backend-schema";`;

    expect(string).toMatch(regex);
  });

  it(`should match the regex 3`, () => {
    const regex = getExportSchemaContentRegex(first, second, third);

    const string = `export { ${first}, ${second} } from "${third}";
    export {
        PageTable,
        PageRelations,
      } from "@sps/sps-website-builder-models-page-backend-schema";`;

    expect(string).toMatch(regex);
  });
});
