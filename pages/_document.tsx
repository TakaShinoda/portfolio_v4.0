import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>{/* <meta name="application-name" content="MyApp" /> */}</Head>
      <body className="dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
