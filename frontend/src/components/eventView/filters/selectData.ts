export const selectData:(data:any) => {options:string[]; name:string; title:string}[] = ({
  optionsCategory=[],
  optionsAddress=[],
  optionsData=[],
}: any) => [
  {
    options: optionsCategory,
    name: "category",
    title: "Category",
  },
  {
    options: ["yes", "no"],
    name: "isvirtual",
    title: "isVirtual",
  },
  {
    options: optionsAddress,
    name: "address",
    title: "Address",
  }
];
