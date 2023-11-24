import { NextResponse } from 'next/server'
import fs from 'fs-extra'

export async function GET () {
  const blogs = JSON.parse(fs.readFileSync('data/blog.json', 'utf-8'))
  return NextResponse.json(blogs)
}