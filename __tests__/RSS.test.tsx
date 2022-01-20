import React from 'react'
import { render, screen } from '@testing-library/react'
import { RSS } from '../components/RSS'

describe('表示項目のテスト', () => {
    test('"RSS"という文字が表示されているか', () => {
        render(<RSS />)
        expect(screen.getAllByText('RSS'))
    })
    
})


