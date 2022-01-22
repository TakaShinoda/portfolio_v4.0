import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from '../components/layouts/Header'

describe('表示項目のテスト', () => {
    test('タイトルが表示されているか', () => {
        render(<Header />)
        expect(screen.getByRole('heading')).toHaveTextContent('console.log(me)')
    })
})