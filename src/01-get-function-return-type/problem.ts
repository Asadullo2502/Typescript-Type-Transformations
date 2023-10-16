import { Equal, Expect } from "../helpers/type-utils";

const functionName = () => {
  return "Hello";
};

type FuncReturn = unknown;

type tests = [Expect<Equal<FuncReturn, string>>];