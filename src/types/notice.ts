export type NoticeCategory =
  | 'Exams'
  | 'Holidays'
  | 'Admissions'
  | 'Fees'
  | 'Events'
  | 'General';

export type NoticePriority = 'urgent' | 'normal';

export type TargetAudience = 'All' | 'Parents' | 'Students' | 'Faculty';

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  category: NoticeCategory;
  priority: NoticePriority;
  targetAudience: TargetAudience;
  isPinned?: boolean;
  author: string;
  circularNumber?: string;
  createdAt: number;
}
