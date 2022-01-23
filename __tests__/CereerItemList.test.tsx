import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { CareerItemList } from '../components/CareerItemList'

describe('表示項目のテスト', () => {
  test('CareerItemが4つ表示されているか', () => {
    render(<CareerItemList />)
    const list = screen.getByRole('list')
    const { getAllByRole } = within(list)
    const items = getAllByRole('listitem')
    expect(items.length).toBe(4)
  })
})
