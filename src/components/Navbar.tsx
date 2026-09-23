import React, { useState } from 'react';
import { useNotice } from '../context/NoticeContext';
import { Bell, Lock, Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { notices, setIsNoticeModalOpen, isAdmin, setIsAdminModalOpen } = useNotice();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const urgentCount = notices.filter((n) => n.priority === 'urgent').length;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg md:text-xl font-bold tracking-tight text-slate-900 font-crest shrink-0 hover:text-amber-800 transition-colors"
          >
            ADARSH VIDYA NIKETAN
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#academics" className="hover:text-slate-900 transition-colors">
              Academics
            </a>
            <a href="#facilities" className="hover:text-slate-900 transition-colors">
              Facilities
            </a>
            <a href="#admissions" className="hover:text-slate-900 transition-colors">
              Admissions
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5">
            {/* Notice Board Popup Trigger Button */}
            <button
              onClick={() => setIsNoticeModalOpen(true)}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 active:bg-amber-900 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
              title="स्कूल का नोटिस बोर्ड खोलें"
            >
              <Bell className="w-4 h-4 text-amber-200" />
              <span>Notice Board</span>
              {urgentCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-[11px] font-bold text-white bg-rose-600 rounded-full animate-pulse">
                  {urgentCount}
                </span>
              )}
            </button>

            {/* Admin Portal Trigger */}
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                isAdmin
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900'
              }`}
              title={isAdmin ? 'एडमिन पैनल खुला है' : 'एडमिन लॉगिन (ID: admin, Pass: 123)'}
            >
              {isAdmin ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Admin Panel</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Admin Login</span>
                  <span className="sm:hidden">Admin</span>
                </>
              )}
            </button>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-200 flex flex-col gap-2 text-sm font-medium text-slate-700 animate-in fade-in slide-in-from-top-2 duration-150">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              About School
            </a>
            <a
              href="#academics"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Academics & Curriculum
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Campus Facilities
            </a>
            <a
              href="#admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Admissions 2026-27
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
