export const calledTypes = [
  {
    value: "I",
    name: "Internação",
  },
  {
    value: "P",
    name: "Pronto Socorro",
  },
];

export function getCalledType(option: string) {
  return calledTypes
    .filter((data) => data.value === option)
    .map((data) => data);
}

export function getCalledTypes() {
  return calledTypes.map((data) => ({
    value: data.value,
    name: data.name,
  }));
}
