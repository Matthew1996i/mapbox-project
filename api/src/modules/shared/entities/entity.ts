export abstract class Entity<T = unknown> {
  public readonly props: T;

  constructor(props: T) {
    this.props = props;
  }

  toJSON(): Required<T> {
    return {
      ...this.props,
    } as Required<T>;
  }
}
