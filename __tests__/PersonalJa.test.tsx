import React from 'react'
import { render, screen } from '@testing-library/react'
import { Personal } from '../components/Personal'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      locale: 'ja',
    }
  },
}))

describe('日本語での表示項目テスト', () => {
  test('氏名が表示されているか', () => {
    render(<Personal />)
    expect(screen.getByRole('heading')).toHaveTextContent('篠田 貴大')
  })

  test('所在地が表示されているか', () => {
    render(<Personal />)
    expect(screen.getByText('東京都'))
  })

  test('会社名が表示されているか', () => {
    render(<Personal />)
    expect(screen.getByText('弁護士ドットコム株式会社'))
  })

  test('一言が表示されているか', () => {
    render(<Personal />)
    expect(screen.getByText('クラウドサインのフロントエンドエンジニアです'))
  })
})
