import { Entity } from "../../entity";

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe("Entity unit tests", () => {
  it("Should set props and id", () => {
    const props = {
      prop1: "value1",
      prop2: 12,
    };

    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
  });

  it("Should convert a entity to JSON", () => {
    const props = {
      prop1: "value1",
      prop2: 12,
    };

    const entity = new StubEntity(props);
    expect(entity.toJSON()).toStrictEqual({
      ...props,
    });
  });
});
