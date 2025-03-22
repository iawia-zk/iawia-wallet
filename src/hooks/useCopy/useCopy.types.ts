export type TUseCopyReturn = {
  copied: boolean;
  copy: (value: string) => Promise<void>;
};
