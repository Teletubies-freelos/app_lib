"use client";

export function Button(): JSX.Element {
  return (
    // eslint-disable-next-line no-alert
    <button onClick={(): void => alert("boopedasdas")} type="button">
      Boop
    </button>
  );
}
