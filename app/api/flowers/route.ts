import { Flower } from '@/utils/types'
import { NextResponse } from 'next/server'

const GET_FLOWERS_URL = `${process.env.POSTER_API_URL}/menu.getProducts?token=${process.env.POSTER_API_ACCESS_TOKEN}&type=batchtickets`

export async function GET() {
	const response = await fetch(GET_FLOWERS_URL)
	const flowers = await response.json()

	return NextResponse.json(flowers)
}
