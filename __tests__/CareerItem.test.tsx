import React from 'react'
import { render, screen } from '@testing-library/react'
import { CareerItem } from '../components/CareerItem'

describe('表示項目のテスト', () => {
  test('propsの値が表示されているか', () => {
    render(<CareerItem career="ダミー株式会社" from="2021/4" to="2022/1" />)
    expect(screen.getByTestId('career')).toHaveTextContent('ダミー株式会社')
    expect(screen.getByTestId('from-to')).toHaveTextContent('2021/4 - 2022/1')
  })

  test('propsの値が表示されているか(toがない場合)', () => {
    render(<CareerItem career="ダミー株式会社" from="2021/4" />)
    expect(screen.getByTestId('career')).toHaveTextContent('ダミー株式会社')
    expect(screen.getByTestId('from-to')).toHaveTextContent('2021/4 -')
  })
})
