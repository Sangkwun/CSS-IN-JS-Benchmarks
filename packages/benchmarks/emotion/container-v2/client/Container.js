import classNames from 'classnames';
import { useMemo } from 'react';
import { css } from '@emotion/react';

const directionStyle = `
  &.row {
    flex-direction: row;
  }
  &.row.reverse {
    flex-direction: row-reverse;
  }
  &.column {
    flex-direction: column;
  }
  &.column.reverse {
    flex-direction: column-reverse;
  }
`;

export const containerCSS = css`
  display: flex;
  ${directionStyle}
`;

function useDirection({ row, column, reverse }) {
  return useMemo(
    () => classNames(row && 'row', column && 'column', reverse && 'reverse'),
    [row, column, reverse]
  );
}

export function ContainerV2({
  className,
  row,
  column,
  reverse,
  justifyContent,
  justifySelf,
  justifyItems,
  alignContent,
  alignSelf,
  alignItems,
  ...props
}) {
  const directionCSS = useDirection({ row, column, reverse });

  return (
    <div
      className={classNames(containerCSS, directionCSS, className)}
      css={{
        justifyContent,
        justifySelf,
        justifyItems,
        alignContent,
        alignSelf,
        alignItems,
      }}
      {...props}
    />
  );
}
