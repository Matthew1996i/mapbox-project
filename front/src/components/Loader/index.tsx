import { Loader as MantineLoader } from '@mantine/core';

import { ContentContainer } from '../Layout/Main/ContentContainer';

type CustomLoaderProps = {
  className?: string;
  withBorder?: boolean;
  withContainer?: boolean;
};

export function CustomLoader({
  className,
  withBorder,
  withContainer,
}: CustomLoaderProps) {
  if (withBorder) {
    return (
      <ContentContainer withBorder={withBorder}>
        <MantineLoader />
      </ContentContainer>
    );
  }

  if (withContainer) {
    return (
      <ContentContainer withBorder>
        <MantineLoader />
      </ContentContainer>
    );
  }

  return (
    <div
      className={`grid w-full min-h-[200px] place-content-center ${className}`}
    >
      <MantineLoader />
    </div>
  );
}
