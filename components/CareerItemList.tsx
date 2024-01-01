import React, { FC } from 'react'
import { CareerItem } from './CareerItem'
import { careerData } from '../data/career'

export const CareerItemList: FC = () => {
  return (
    <ul className="list-none m-0 p-0" data-testid="career-item-list">
      {careerData.map((career, i) => (
        <CareerItem
          key={i}
          name={career.name}
          from={career.from}
          to={career.to}
        />
      ))}
    </ul>
  )
}
