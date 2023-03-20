export type Movie = {
  id: number,
  name: string,
  image: string,
  language: string,
  description: string,
  ticketCost?: number,
  rows?: number,
  cols?: number,
  seats?: Seats
}

export type Seats = {
  [key: string]: number[]
}