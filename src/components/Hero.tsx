import React from 'react';
import { useNotice } from '../context/NoticeContext';
import { Bell, ArrowRight, ShieldCheck, GraduationCap, Award, Users, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setIsNoticeModalOpen, setIsAdminModalOpen, notices } = useNotice();
  const urgentCount = notices.filter((n) => n.priority === 'urgent').length;

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background Hero Image with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_school_campus_1790176522301.jpg"
          alt="Adarsh Vidya Niketan Public School Campus"
          className="w-full h-full object-cover object-center filter brightness-65"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl">
          {/* Institutional Kicker without pill styling */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-amber-300 mb-4 tracking-wide uppercase">
            <span>केंद्रीय माध्यमिक शिक्षा बोर्ड (CBSE) संबद्ध</span>
            <span aria-hidden="true">·</span>
            <span>सत्र 2026-27</span>
            <span aria-hidden="true">·</span>
            <span>संस्थापना 1998</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight font-display text-balance mb-6">
            संस्कार, आधुनिक ज्ञान और स्वर्णिम भविष्य की आधारशिला
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8">
            आदर्श विद्या निकेतन में हम विद्यार्थियों को केवल किताबी ज्ञान ही नहीं, बल्कि नैतिक मूल्य, वैज्ञानिक दृष्टिकोण, खेलकूद और नेतृत्व कौशल प्रदान करते हैं।
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsNoticeModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-600 active:bg-amber-800 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer whitespace-nowrap"
            >
              <Bell className="w-4 h-4 text-amber-200 animate-bounce" />
              <span>सूचना पट्ट खोलें (Open Notice Board)</span>
              {urgentCount > 0 && (
                <span className="bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                  {urgentCount} नए
                </span>
              )}
            </button>

            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-md transition-all whitespace-nowrap"
            >
              <span>प्रवेश 2026-27 हेतु आवेदन करें</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-xl border border-slate-700 transition-colors whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>एडमिन पोर्टल (Admin Login: admin / 123)</span>
            </button>
          </div>
        </div>

        {/* Quantified Adjacency Proof Metrics */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums font-mono">
              2,400+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              अध्ययनरत विद्यार्थी
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums font-mono">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              CBSE बोर्ड परीक्षा परिणाम
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums font-mono">
              65+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              अनुभवी एवं प्रशिक्षित शिक्षक
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums font-mono">
              15+ एकड़
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              हरित एवं आधुनिक परिसर
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
