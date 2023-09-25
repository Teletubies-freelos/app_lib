import { createSignal } from '@react-rxjs/utils';
import { bind } from '@react-rxjs/core';
export const [isOpenCategory$, setIsOpenCategory] = createSignal<
  boolean | undefined
>();
export const [useIsOpenCategory, isOpenCategoryModal$] = bind(
  isOpenCategory$,
  false,
);
