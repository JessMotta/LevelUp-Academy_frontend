import { AllProviders } from "@/providers";
import "./globals.css";

export const metadata = {
  title: "LevelUp Academy",
  description: "Gamificação para a área educacional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <AllProviders>
          <div className="w-full h-screen">{children}</div>
        </AllProviders>
      </body>
    </html>
  );
}
