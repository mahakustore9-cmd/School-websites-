import React from 'react';
import { useNotice } from '../context/NoticeContext';
import { Bell, ChevronRight } from 'lucide-react';

export const NewsTicker: React.FC = () => {
  const { notices, setIsNoticeModalOpen, setSelectedNoticeId } = useNotice();

  const urgentOrLatest = notices.slice(0, 5);

  const handleNoticeClick = (id: string) => {
    setSelectedNoticeId(id);
    setIsNoticeModalOpen(true);
  };

  return (
    <div className="bg-amber-950 text-amber-100 text-xs border-b border-amber-900/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center h-9 px-4 sm:px-6">
        {/* Ticker Lead-in Label */}
        <div className="flex items-center gap-1.5 bg-amber-900 text-amber-200 font-semibold px-2.5 py-1 rounded text-[11px] shrink-0 uppercase tracking-wider mr-3">
          <Bell className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>सूचना पट्ट (Live Circulars)</span>
        </div>

        {/* Marquee Container */}
        <div className="flex-1 overflow-hidden relative group">
          <div className="animate-marquee items-center gap-8 py-0.5">
            {urgentOrLatest.concat(urgentOrLatest).map((notice, idx) => (
              <button
                key={`${notice.id}-${idx}`}
                onClick={() => handleNoticeClick(notice.id)}
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap"
              >
                {notice.priority === 'urgent' && (
                  <span className="text-[10px] font-bold text-rose-300 uppercase tracking-wider">
                    [अति-महत्वपूर्ण]
                  </span>
                )}
                <span className="text-amber-100 font-medium hover:underline">
                  {notice.title}
                </span>
                <span className="text-amber-400/80 text-[11px]">
                  ({notice.date})
                </span>
                <span className="text-amber-700 mx-2" aria-hidden="true">
                  ◆
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Open Button */}
        <button
          onClick={() => {
            setSelectedNoticeId(null);
            setIsNoticeModalOpen(true);
          }}
          className="shrink-0 hidden md:flex items-center gap-1 text-[11px] font-medium text-amber-300 hover:text-white transition-colors ml-4 pl-3 border-l border-amber-800"
        >
          <span>सभी सूचनाएं देखें</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
