import React, { useState, useMemo } from 'react';
import { useNotice } from '../context/NoticeContext';
import { Notice, NoticeCategory } from '../types/notice';
import {
  X,
  Search,
  Pin,
  AlertTriangle,
  FileText,
  Calendar,
  Share2,
  Printer,
  Trash2,
  Edit3,
  PlusCircle,
  Shield,
  Check,
  Minimize2,
  Maximize2,
  BookOpen
} from 'lucide-react';

export const NoticeBoardModal: React.FC = () => {
  const {
    notices,
    isNoticeModalOpen,
    setIsNoticeModalOpen,
    selectedNoticeId,
    setSelectedNoticeId,
    deleteNotice,
    togglePin,
    isAdmin,
    setIsAdminModalOpen,
    showToast,
  } = useNotice();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  // Filter notices
  const filteredNotices = useMemo(() => {
    return notices
      .filter((n) => {
        if (activeCategory === 'urgent') return n.priority === 'urgent';
        if (activeCategory !== 'all') return n.category.toLowerCase() === activeCategory.toLowerCase();
        return true;
      })
      .filter((n) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          n.title.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q) ||
          (n.circularNumber && n.circularNumber.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        // Pinned notices first, then newest
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return b.createdAt - a.createdAt;
      });
  }, [notices, activeCategory, searchQuery]);

  if (!isNoticeModalOpen) {
    return (
      <button
        onClick={() => {
          setIsNoticeModalOpen(true);
          setIsMinimized(false);
        }}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-amber-800 hover:bg-amber-900 active:scale-95 text-white font-medium text-sm rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer group border-2 border-amber-600/60"
        aria-label="सूचना पट्ट खोलें"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-300"></span>
        </span>
        <FileText className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
        <span>सूचना पट्ट (Notice Board)</span>
      </button>
    );
  }

  // Minimized floating dock
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-white border border-slate-300 rounded-xl shadow-2xl p-3 max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-200">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-slate-900 truncate">सूचना पट्ट (Notice Board)</p>
          <p className="text-[11px] text-slate-500 truncate">{notices.length} सूचनाएं उपलब्ध</p>
        </div>
        <button
          onClick={() => setIsMinimized(false)}
          className="p-1.5 hover:bg-slate-100 rounded text-slate-600 hover:text-slate-900"
          title="अधिकतम करें"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsNoticeModalOpen(false)}
          className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-700"
          title="बंद करें"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  const handleCopyNotice = (notice: Notice) => {
    const text = `[स्कूल सूचना - ${notice.title}]\nदिनांक: ${notice.date}\nक्रमांक: ${notice.circularNumber || 'N/A'}\n\n${notice.content}\n\n- ${notice.author}`;
    navigator.clipboard?.writeText(text).then(() => {
      setCopiedId(notice.id);
      showToast('सूचना कॉपी कर ली गई है!', 'success');
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-board-title"
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white px-5 sm:px-8 py-4 sm:py-5 border-b border-amber-900/40 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="notice-board-title" className="text-base sm:text-lg font-bold tracking-tight text-white">
                  आदर्श विद्या निकेतन — आधिकारिक सूचना पट्ट
                </h2>
              </div>
              <p className="text-xs text-amber-200/80">
                Official Circulars, Examination Schedules & Announcements (2026-27)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Admin status / shortcut button */}
            {isAdmin ? (
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                title="नया नोटिस लिखें"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>+ नया नोटिस लिखें</span>
              </button>
            ) : (
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-xs text-amber-200 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                title="एडमिन लॉगिन"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Login</span>
              </button>
            )}

            <button
              onClick={() => setIsMinimized(true)}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="छोटा करें"
              aria-label="Minimize notice board"
            >
              <Minimize2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsNoticeModalOpen(false)}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="बंद करें"
              aria-label="Close notice board"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Admin Bar Notification if logged in */}
        {isAdmin && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-5 py-2.5 flex items-center justify-between text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="font-semibold">एडमिन मोड चालू है:</span>
              <span className="text-emerald-700 hidden sm:inline">
                आप किसी भी नोटिस को संपादित, पिन या नया नोटिस जोड़ सकते हैं।
              </span>
            </div>
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="font-bold underline text-emerald-800 hover:text-emerald-950"
            >
              + नया नोटिस जोड़ें (Post Notice)
            </button>
          </div>
        )}

        {/* Filter Bar & Search */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/80 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 text-xs no-scrollbar">
            {[
              { id: 'all', label: 'सभी (All)' },
              { id: 'urgent', label: 'तत्काल (Urgent)' },
              { id: 'exams', label: 'परीक्षा (Exams)' },
              { id: 'admissions', label: 'प्रवेश (Admissions)' },
              { id: 'holidays', label: 'अवकाश (Holidays)' },
              { id: 'events', label: 'गतिविधियां (Events)' },
              { id: 'fees', label: 'शुल्क (Fees)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[200px] sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="नोटिस खोजें (Search)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-700/30 focus:border-amber-700"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Notices Content List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar bg-slate-100/50">
          {filteredNotices.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white rounded-xl border border-slate-200">
              <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">कोई सूचना नहीं मिली</p>
              <p className="text-xs text-slate-500 mt-1">
                दिए गए फिल्टर या खोज शब्द के लिए कोई नोटिस उपलब्ध नहीं है।
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 px-3 py-1.5 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg hover:bg-amber-100"
                >
                  खोज फ़िल्टर हटाएं
                </button>
              )}
            </div>
          ) : (
            filteredNotices.map((notice) => {
              const isSelected = selectedNoticeId === notice.id;

              return (
                <article
                  key={notice.id}
                  id={`notice-item-${notice.id}`}
                  className={`bg-white rounded-xl border p-4 sm:p-5 transition-all shadow-xs ${
                    isSelected
                      ? 'ring-2 ring-amber-600 border-amber-600 bg-amber-50/20'
                      : notice.priority === 'urgent'
                      ? 'border-amber-300 hover:border-amber-400 bg-white'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Metadata Header adhering to Zero-Pill rule: clean unboxed text with typographic separators */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                      {notice.isPinned && (
                        <span className="flex items-center gap-1 text-amber-800 font-semibold">
                          <Pin className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
                          <span>पिन किया गया (Pinned)</span>
                          <span aria-hidden="true">·</span>
                        </span>
                      )}

                      {notice.priority === 'urgent' && (
                        <span className="flex items-center gap-1 text-rose-700 font-bold">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>अति-महत्वपूर्ण</span>
                          <span aria-hidden="true">·</span>
                        </span>
                      )}

                      <span className="text-slate-700">{notice.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{notice.date}</span>
                      </span>

                      {notice.circularNumber && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono text-slate-600">{notice.circularNumber}</span>
                        </>
                      )}

                      <span aria-hidden="true">·</span>
                      <span>लक्षित वर्ग: {notice.targetAudience}</span>
                    </div>

                    {/* Admin quick inline actions */}
                    {isAdmin && (
                      <div className="flex items-center gap-1 text-xs">
                        <button
                          onClick={() => togglePin(notice.id)}
                          className={`p-1.5 rounded transition-colors ${
                            notice.isPinned
                              ? 'text-amber-800 bg-amber-100 hover:bg-amber-200'
                              : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                          }`}
                          title={notice.isPinned ? 'अनपिन करें' : 'पिन करें'}
                        >
                          <Pin className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            deleteNotice(notice.id);
                          }}
                          className="p-1.5 rounded text-rose-600 hover:bg-rose-50 hover:text-rose-800 transition-colors"
                          title="नोटिस हटाएं"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-2">
                    {notice.title}
                  </h3>

                  {/* Body Text */}
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-3.5">
                    {notice.content}
                  </p>

                  {/* Card Footer: Signature & Actions */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="text-slate-500 italic">
                      जारीकर्ता: <span className="font-medium text-slate-700">{notice.author}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyNotice(notice)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                      >
                        {copiedId === notice.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-medium">कॉपी हुआ</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5" />
                            <span>कॉपी करें</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={handlePrint}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                        title="प्रिंट करें"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>प्रिंट</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-5 py-3.5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            कुल <span className="font-semibold text-slate-800">{notices.length}</span> सूचनाएं सूचीबद्ध
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsNoticeModalOpen(false)}
              className="px-4 py-1.5 font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              बंद करें (Close)
            </button>
            {isAdmin ? (
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="px-4 py-1.5 font-medium text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors cursor-pointer"
              >
                एडमिन डैशबोर्ड
              </button>
            ) : (
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="px-3 py-1.5 font-medium text-amber-800 hover:underline"
              >
                एडमिन लॉगिन (ID: admin)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
