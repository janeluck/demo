import {
  baseConverter,
  transferToTen,
  transferFromTwo,
  transferToTwo
} from "../Computer-Science/Positional-Notation-Transfer.js";



it("Positional-Notation-Transfer baseConverter", () => {
  expect(baseConverter("9158", 16)).toEqual("23C6");
});
it("Positional-Notation-Transfer transferToTen", () => {
  expect(transferToTen("1010", 2)).toEqual(10);
});
it("Positional-Notation-Transfer transferFromTwo", () => {
  expect(transferFromTwo("111111010", 16)).toEqual("1FA");
});
it("Positional-Notation-Transfer transferToTwo", () => {
  expect(transferToTwo("1FA", 16)).toEqual("111111010");
});
