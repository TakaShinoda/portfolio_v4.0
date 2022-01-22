import React from 'react'
import { render, screen } from '@testing-library/react'
import { Career } from '../components/Career'

describe('表示項目のテスト', () => {
  test('"Career"という文字が表示されているか', () => {
    render(<Career />)
    expect(screen.getAllByText('Career'))
  })
})
