import { Metadata } from "next"


export const metadata: Metadata = {
  title: {
    absolute: "", //this will override everything, so wouldn't really use it in the parent. see blog for example
    default: "Next.js tutorial - Dan",
    template: "%s | DAN", //example in blog route. 
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            color: "black"
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
            color: "black"
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
