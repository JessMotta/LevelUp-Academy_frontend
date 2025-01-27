import "./globals.css";

export const metadata = {
  title: 'LevelUp Academy',
  description: 'Gamificação para a área educacional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
