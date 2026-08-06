export interface NewsItem {
  id: string;
  title: string;
  date: string;
  source: "BK Finance" | "HMRC";
  excerpt: string;
  url?: string;
}

// Add new posts here — BK Finance updates or HMRC announcements.
// Newest items should go first.
export const news: NewsItem[] = [];
