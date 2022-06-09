import React, { VFC } from 'react'
import { CareerItem } from './CareerItem'

export const CareerItemList: VFC = () => {
  return (
    <ul className="list-none m-0 p-0" data-testid="career-item-list">
      <CareerItem career="弁護士ドットコム株式会社" from="2021/11" />
      <CareerItem
        career="飲食系の某IT企業"
        from="2020/4"
        to="2021/10"
      />
      <CareerItem
        career="宮崎大学大学院 工学研究科 工学専攻 機械・情報系コース"
        from="2018/4"
        to="2020/3"
      />
      <CareerItem
        career="宮崎大学 工学部 情報システム工学科"
        from="2014/4"
        to="2018/3"
      />
    </ul>
  )
}
