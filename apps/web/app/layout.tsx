import { PropsWithChildren } from "react";
import Providers from "../components/providers";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
