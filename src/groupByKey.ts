type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: GroupsMap, key: GroupsMap): {} {
  const result = {};

  items.forEach((item) => {
    const groupKey = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  });

  return result;
}
