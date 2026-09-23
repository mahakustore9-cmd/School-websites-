/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NoticeProvider } from './context/NoticeContext';
import { Navbar } from './components/Navbar';
import { NewsTicker } from './components/NewsTicker';
import { Hero } from './components/Hero';
import { NoticeBoardPreviewSection } from './components/NoticeBoardPreviewSection';
import { PrincipalMessage } from './components/PrincipalMessage';
import { AcademicWings } from './components/AcademicWings';
import { CampusFacilities } from './components/CampusFacilities';
import { AdmissionSection } from './components/AdmissionSection';
import { Footer } from './components/Footer';
import { NoticeBoardModal } from './components/NoticeBoardModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { ToastNotification } from './components/ToastNotification';

export default function App() {
  return (
    <NoticeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
        {/* Live News Ticker at the top */}
        <NewsTicker />

        {/* Top Navbar adhering to 3-zone contract */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="flex-1">
          <Hero />
          <NoticeBoardPreviewSection />
          <PrincipalMessage />
          <AcademicWings />
          <CampusFacilities />
          <AdmissionSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Popup Notice Board */}
        <NoticeBoardModal />

        {/* Admin Login & Notice Post Portal */}
        <AdminPanelModal />

        {/* Toast Notification Manager */}
        <ToastNotification />
      </div>
    </NoticeProvider>
  );
}
