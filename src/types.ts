export interface Feature {
  name: string;
  icon: string;
  description: string;
}

export interface GameStats {
  totalGames: number;
  accuracy: number;
  bestStreak: number;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
}