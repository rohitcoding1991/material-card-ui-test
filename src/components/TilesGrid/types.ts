export interface ITile {
  id: number
  title: string
  subtitle: string
  imageURL: string
  created_at: string
  cardType: "shapes" | "mobile" | "chart"
}