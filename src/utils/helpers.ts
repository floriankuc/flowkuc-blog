export const pipe =
  (f: any, g: any) =>
  (...args: any[]) =>
    g(f(...args));

export const capitalise = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const unhyphen = (str: string): string => str.replace(/[_-]/gi, " ");
