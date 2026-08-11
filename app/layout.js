export const metadata = {
  title: "Electrical Shop",
  description: "Online Electrical Store",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
