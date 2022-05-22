interface Cloneable {
  clone(): Cloneable;
}
export class EventContext<T extends (...args: any[]) => any> implements Cloneable {
  #private;
  eventArray: (T | null)[];
  filter: boolean;
  off: boolean;
  execute: (...args: Parameters<T>) => ReturnType<T> | undefined;
  clone(): Cloneable;
}
export class EventEmitter<
  T extends {
    [x: string]: (...args: any[]) => void;
  },
> {
  #private;
  once: (key: keyof T, value: T[keyof T]) => void;
  emit: (key: keyof T, ...args: Parameters<T[keyof T]>) => void;
  on: (key: keyof T, value?: T[keyof T] | undefined) => void;
  off: (key: keyof T) => void;
  delete: (key: keyof T) => void;
}

//# sourceMappingURL=index.d.ts.map
