type Blog = {
  title: string
  date: string
  url: string
}

export const blogData = [
  {
    title: 'Axios における request method の引数の型定義を調査した話',
    date: '2023-12-23',
    url: 'https://creators.bengo4.com/entry/2023/12/23/000000'
  },
  {
    title: 'CloudSign の社内用管理画面を Vue2.7 に移行した話',
    date: '2023-03-27',
    url: 'https://creators.bengo4.com/entry/2023/03/27/083000'
  },
  {
    title: 'クラウドサインのフロントエンドミーティングと、その勉強会で発表した話',
    date: '2022-07-28',
    url: 'https://creators.bengo4.com/entry/2022/07/28/083000'
  }
] as const satisfies Blog[]
