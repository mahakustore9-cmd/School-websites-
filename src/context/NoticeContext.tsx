import React, { createContext, useContext, useEffect, useState } from 'react';
import { INITIAL_NOTICES } from '../data/initialNotices';
import { Notice } from '../types/notice';

const STORAGE_KEY_NOTICES = 'avn_school_notices_v1';
const STORAGE_KEY_ADMIN = 'avn_admin_session_v1';

interface ToastData {
  id: string;
  text: string;
  type: 'success' | 'error' | 'info';
}

interface NoticeContextType {
  notices: Notice[];
  addNotice: (data: {
    title: string;
    content: string;
    category: Notice['category'];
    priority: Notice['priority'];
    targetAudience: Notice['targetAudience'];
    author?: string;
    circularNumber?: string;
    date?: string;
  }) => Notice;
  editNotice: (id: string, updated: Partial<Notice>) => void;
  deleteNotice: (id: string) => void;
  togglePin: (id: string) => void;
  resetToDefaultNotices: () => void;
  isAdmin: boolean;
  loginAdmin: (user: string, pass: string) => { success: boolean; message: string };
  logoutAdmin: () => void;
  isNoticeModalOpen: boolean;
  setIsNoticeModalOpen: (open: boolean) => void;
  selectedNoticeId: string | null;
  setSelectedNoticeId: (id: string | null) => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
  toasts: ToastData[];
  showToast: (text: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const NoticeContext = createContext<NoticeContextType | undefined>(undefined);

export const NoticeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notices, setNotices] = useState<Notice[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_NOTICES);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading notices from storage:', e);
    }
    return INITIAL_NOTICES;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY_ADMIN) === 'true';
    } catch {
      return false;
    }
  });

  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState<boolean>(false);
  const [selectedNoticeId, setSelectedNoticeId] = useState<string | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastData[]>([]);

  // Automatically open the notice board modal on initial visit after a brief smooth delay
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('avn_welcome_notice_seen');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsNoticeModalOpen(true);
        sessionStorage.setItem('avn_welcome_notice_seen', 'true');
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Save notices to localStorage on update
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_NOTICES, JSON.stringify(notices));
    } catch (e) {
      console.error('Failed to save notices to localStorage:', e);
    }
  }, [notices]);

  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const loginAdmin = (user: string, pass: string): { success: boolean; message: string } => {
    const trimmedUser = user.trim();
    const trimmedPass = pass.trim();

    // ID: admin, Password: 123 (strict check as requested)
    if (trimmedUser === 'admin' && trimmedPass === '123') {
      setIsAdmin(true);
      try {
        sessionStorage.setItem(STORAGE_KEY_ADMIN, 'true');
      } catch (err) {
        console.error(err);
      }
      showToast('सफलतापूर्वक एडमिन लॉगिन हुआ! आप नए नोटिस जारी कर सकते हैं।', 'success');
      return { success: true, message: 'लॉगिन सफल!' };
    }

    const errorMsg = 'अमान्य क्रेडेंशियल्स! ID: admin और पासवर्ड: 123 दर्ज करें।';
    showToast(errorMsg, 'error');
    return { success: false, message: errorMsg };
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    try {
      sessionStorage.removeItem(STORAGE_KEY_ADMIN);
    } catch (err) {
      console.error(err);
    }
    showToast('एडमिन सत्र समाप्त हुआ (Logged Out)।', 'info');
  };

  const addNotice = (data: {
    title: string;
    content: string;
    category: Notice['category'];
    priority: Notice['priority'];
    targetAudience: Notice['targetAudience'];
    author?: string;
    circularNumber?: string;
    date?: string;
  }): Notice => {
    const today = new Date().toISOString().split('T')[0];
    const circularSeq = Math.floor(10 + Math.random() * 90);
    const newNotice: Notice = {
      id: `notice-${Date.now()}`,
      title: data.title.trim(),
      content: data.content.trim(),
      category: data.category,
      priority: data.priority,
      targetAudience: data.targetAudience,
      author: data.author?.trim() || 'प्रशासक कार्यालय (Admin Office)',
      circularNumber: data.circularNumber?.trim() || `AVN/2026-27/CIR-${circularSeq}`,
      date: data.date || today,
      isPinned: data.priority === 'urgent',
      createdAt: Date.now(),
    };

    setNotices((prev) => [newNotice, ...prev]);
    showToast('नया नोटिस सफलतापूर्वक नोटिस बोर्ड पर पोस्ट कर दिया गया!', 'success');
    return newNotice;
  };

  const editNotice = (id: string, updated: Partial<Notice>) => {
    setNotices((prev) =>
      prev.map((n) => (n.id === id ? { ...n, ...updated } : n))
    );
    showToast('नोटिस को सफलतापूर्वक अपडेट किया गया!', 'success');
  };

  const deleteNotice = (id: string) => {
    setNotices((prev) => prev.filter((n) => n.id !== id));
    showToast('नोटिस को हटा दिया गया।', 'info');
  };

  const togglePin = (id: string) => {
    setNotices((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isPinned: !n.isPinned } : n))
    );
  };

  const resetToDefaultNotices = () => {
    setNotices(INITIAL_NOTICES);
    showToast('नोटिस बोर्ड को मानक प्रारंभिक सूचनाओं पर रीसेट कर दिया गया।', 'info');
  };

  return (
    <NoticeContext.Provider
      value={{
        notices,
        addNotice,
        editNotice,
        deleteNotice,
        togglePin,
        resetToDefaultNotices,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        isNoticeModalOpen,
        setIsNoticeModalOpen,
        selectedNoticeId,
        setSelectedNoticeId,
        isAdminModalOpen,
        setIsAdminModalOpen,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};

export const useNotice = (): NoticeContextType => {
  const context = useContext(NoticeContext);
  if (!context) {
    throw new Error('useNotice must be used within a NoticeProvider');
  }
  return context;
};
