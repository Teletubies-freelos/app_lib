import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
