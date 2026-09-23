import React from 'react';
import { useNotice } from '../context/NoticeContext';
import { Bell, ArrowUpRight, Pin, AlertCircle, PlusCircle, ShieldCheck } from 'lucide-react';

export const NoticeBoardPreviewSection: React.FC = () => {
  const { notices, setIsNoticeModalOpen, setSelectedNoticeId, isAdmin, setIsAdminModalOpen } = useNotice();

  const previewNotices = notices.slice(0, 4);

  const handleCardClick = (id: string) => {
    setSelectedNoticeId(id);
    setIsNoticeModalOpen(true);
  };

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2">
              <Bell className="w-3.5 h-3.5" />
              <span>ताजा परिपत्र एवं सूचनाएं</span>
              <span aria-hidden="true">·</span>
              <span>Updated Live</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
              आधिकारिक सूचना पट्ट (Notice Board)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              कक्षा परीक्षाओं, अवकाश, प्रवेश, शुल्क एवं महत्वपूर्ण गतिविधियों से संबंधित नवीनतम दिशा-निर्देश।
            </p>
          </div>

          <div className="flex items-center gap-3">
            {isAdmin && (
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition-colors cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                <span>+ नया नोटिस लिखें</span>
              </button>
            )}

            <button
              onClick={() => {
                setSelectedNoticeId(null);
                setIsNoticeModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-amber-800 hover:bg-amber-900 text-white rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>संपूर्ण नोटिस पट्ट खोलें (Popup)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {previewNotices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => handleCardClick(notice.id)}
              className="bg-white rounded-xl border border-slate-200 hover:border-amber-400 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2.5">
                  <div className="flex items-center gap-2">
                    {notice.isPinned && (
                      <span className="flex items-center gap-1 text-amber-800 font-semibold">
                        <Pin className="w-3.5 h-3.5 fill-amber-700" />
                        <span>पिन</span>
                        <span aria-hidden="true">·</span>
                      </span>
                    )}

                    {notice.priority === 'urgent' && (
                      <span className="flex items-center gap-1 text-rose-700 font-bold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>अति-महत्वपूर्ण</span>
                        <span aria-hidden="true">·</span>
                      </span>
                    )}

                    <span>{notice.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{notice.date}</span>
                  </div>

                  {notice.circularNumber && (
                    <span className="font-mono text-[11px] text-slate-400">
                      {notice.circularNumber}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug mb-2">
                  {notice.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {notice.content}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{notice.author}</span>
                <span className="text-amber-800 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  विस्तार से पढ़ें →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Board Footnote for parents */}
        <div className="mt-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>अभिभावकों हेतु निर्देश:</strong> सभी आधिकारिक परिपत्र इसी पट्ट पर जारी किए जाते हैं। किसी भी संशय की स्थिति में विद्यालय कार्यालय से संपर्क करें।
            </span>
          </div>

          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="text-amber-800 hover:text-amber-950 font-semibold underline shrink-0 cursor-pointer"
          >
            {isAdmin ? 'एडमिन पैनल खोलें' : 'एडमिन लॉगिन (ID: admin)'}
          </button>
        </div>
      </div>
    </section>
  );
};
