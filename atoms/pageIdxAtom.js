import { atom } from "recoil";

const pageIdxAtom = atom({
  key: "pageIdx",
  default: 0,
});

export default pageIdxAtom;
