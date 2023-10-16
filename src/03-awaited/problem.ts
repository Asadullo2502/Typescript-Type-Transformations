import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = unknown;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];