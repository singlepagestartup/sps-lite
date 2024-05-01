interface RelationAlias {
  [key: string]: {
    schemaKey: string;
    toDataKey: string;
  };
}

export const transformManyToManyRelations = ({
  data,
  relationAliases,
}: {
  data: any;
  relationAliases: RelationAlias;
}) => {
  const transformedData: any = {};

  Object.entries(data).forEach(([key, value]) => {
    if (relationAliases[key]) {
      const relationConfig = relationAliases[key];
      const toAddKey = relationConfig.toDataKey;
      const toAddData = data[key].map(
        (item: any) => item[relationConfig.schemaKey],
      );
      transformedData[toAddKey] = toAddData;

      return;
    }

    transformedData[key] = value;
  });

  return transformedData;
};
