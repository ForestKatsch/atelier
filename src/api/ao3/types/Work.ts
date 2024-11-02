export interface Work {
  work: string;

  // External strings.
  title: string;
  summary: string;

  kudosCount: number;
  viewCount: number;
  wordCount: number;

  publishedAt: Date;
  updatedAt: Date;
}
