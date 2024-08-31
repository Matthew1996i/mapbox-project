import { Affix } from "@mantine/core";
import { ReactElement } from "react";

type FloatingPosition = {
  position: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
  children: ReactElement;
};

export default function FoatingButtons({
  position,
  children,
}: FloatingPosition) {
  return <Affix position={position}>{children}</Affix>;
}
