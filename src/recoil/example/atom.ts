import { atom } from 'recoil';

const exampleAtom = atom({
  key: 'exampleAtom',
  default: {
    name: 'example',
    value: 'Example Value!',
  },
});

export default exampleAtom;
