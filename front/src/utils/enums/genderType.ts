export const genderTypes = [
  {
    value: "M",
    name: "Masculino",
  },
  {
    value: "F",
    name: "Feminino",
  },
];

export function getGenderType(option: string) {
  return genderTypes
    .filter((data) => data.value === option)
    .map((data) => data);
}

export function getGenderTypes() {
  return genderTypes.map((data) => ({
    value: data.value,
    name: data.name,
  }));
}
