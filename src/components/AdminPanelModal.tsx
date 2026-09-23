import React, { useState } from 'react';
import { useNotice } from '../context/NoticeContext';
import { NoticeCategory, NoticePriority, TargetAudience, Notice } from '../types/notice';
import {
  X,
  Lock,
  User,
  KeyRound,
  PlusCircle,
  ListFilter,
  CheckCircle2,
  Trash2,
  Edit2,
  Pin,
  Eye,
  EyeOff,
  LogOut,
  Sparkles,
  AlertCircle,
  FileCheck,
  RotateCcw
} from 'lucide-react';

export const AdminPanelModal: React.FC = () => {
  const {
    isAdmin,
    loginAdmin,
    logoutAdmin,
    isAdminModalOpen,
    setIsAdminModalOpen,
    addNotice,
    editNotice,
    deleteNotice,
    togglePin,
    resetToDefaultNotices,
    notices,
    setIsNoticeModalOpen,
    setSelectedNoticeId,
  } = useNotice();

  // Login Form States
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Admin Active Tab
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');

  // New Notice Form State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<NoticeCategory>('General');
  const [priority, setPriority] = useState<NoticePriority>('normal');
  const [targetAudience, setTargetAudience] = useState<TargetAudience>('All');
  const [circularNumber, setCircularNumber] = useState('');
  const [author, setAuthor] = useState('प्रशासक कार्यालय (Admin Office)');

  // Edit notice state
  const [editingNoticeId, setEditingNoticeId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editCategory, setEditCategory] = useState<NoticeCategory>('General');
  const [editPriority, setEditPriority] = useState<NoticePriority>('normal');

  if (!isAdminModalOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const res = loginAdmin(username, password);
    if (!res.success) {
      setLoginError(res.message);
    }
  };

  const handlePublishNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('कृपया नोटिस का शीर्षक और विवरण दोनों दर्ज करें।');
      return;
    }

    const created = addNotice({
      title,
      content,
      category,
      priority,
      targetAudience,
      author,
      circularNumber: circularNumber.trim() || undefined,
    });

    // Reset form
    setTitle('');
    setContent('');
    setCategory('General');
    setPriority('normal');
    setCircularNumber('');

    // Open Notice Board and highlight the newly created notice
    setIsAdminModalOpen(false);
    setSelectedNoticeId(created.id);
    setIsNoticeModalOpen(true);
  };

  const startEditing = (notice: Notice) => {
    setEditingNoticeId(notice.id);
    setEditTitle(notice.title);
    setEditContent(notice.content);
    setEditCategory(notice.category);
    setEditPriority(notice.priority);
  };

  const saveEdit = (id: string) => {
    if (!editTitle.trim() || !editContent.trim()) return;
    editNotice(id, {
      title: editTitle.trim(),
      content: editContent.trim(),
      category: editCategory,
      priority: editPriority,
    });
    setEditingNoticeId(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-600/30 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">
                {isAdmin ? 'विद्यालय एडमिन पोर्टल (Admin Portal)' : 'एडमिन लॉगिन (Admin Sign In)'}
              </h2>
              <p className="text-xs text-slate-400">
                {isAdmin
                  ? 'नोटिस बोर्ड पर नई सूचना प्रकाशित एवं प्रबंधित करें'
                  : 'ID: admin एवं Password: 123 दर्ज करें'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={logoutAdmin}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-rose-300 hover:text-white hover:bg-rose-900/40 rounded-lg transition-colors"
                title="लॉगआउट करें"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}

            <button
              onClick={() => setIsAdminModalOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {!isAdmin ? (
          /* Login Form */
          <div className="p-6 sm:p-10 max-w-md mx-auto w-full my-auto">
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl mx-auto flex items-center justify-center text-amber-800 mb-3 shadow-inner">
                <KeyRound className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">प्रशासक प्रमाणीकरण</h3>
              <p className="text-xs text-slate-500 mt-1">
                नोटिस बोर्ड पर सूचनाएं जोड़ने के लिए लॉगिन करें
              </p>
            </div>

            {/* Quick credentials helper banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5 text-xs text-amber-900 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold">आवश्यक क्रेडेंशियल्स:</span>
                <div className="mt-1 flex items-center gap-3">
                  <span>ID: <code className="bg-amber-100/80 px-1.5 py-0.5 rounded font-mono font-semibold">admin</code></span>
                  <span>Password: <code className="bg-amber-100/80 px-1.5 py-0.5 rounded font-mono font-semibold">123</code></span>
                </div>
              </div>
            </div>

            {loginError && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-lg text-xs flex items-center gap-2 mb-4">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  एडमिन ID / Username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/30 focus:border-amber-700 transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  पासवर्ड / Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="123"
                    className="w-full pl-9 pr-10 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/30 focus:border-amber-700 transition-all font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-amber-800 hover:bg-amber-900 text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>लॉगिन करें (Sign In as Admin)</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard & Notice Poster */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tabs Bar */}
            <div className="px-6 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
              <button
                onClick={() => setActiveTab('create')}
                className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
                  activeTab === 'create'
                    ? 'border-amber-800 text-amber-900 bg-white -mb-px'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                <PlusCircle className="w-4 h-4" />
                <span>नया नोटिस लिखें (Post Notice)</span>
              </button>

              <button
                onClick={() => setActiveTab('manage')}
                className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
                  activeTab === 'manage'
                    ? 'border-amber-800 text-amber-900 bg-white -mb-px'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                <ListFilter className="w-4 h-4" />
                <span>सभी नोटिस प्रबंधित करें ({notices.length})</span>
              </button>
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
              {activeTab === 'create' ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Form */}
                  <form onSubmit={handlePublishNotice} className="lg:col-span-7 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        नोटिस का शीर्षक (Notice Title) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="उदा: वार्षिक परीक्षा 2026 या शीतकालीन अवकाश सूचना"
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/30 focus:border-amber-700"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          श्रेणी (Category)
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value as NoticeCategory)}
                          className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                        >
                          <option value="General">सामान्य सूचना (General)</option>
                          <option value="Exams">परीक्षा (Exams)</option>
                          <option value="Holidays">अवकाश / छुट्टियां (Holidays)</option>
                          <option value="Admissions">प्रवेश (Admissions)</option>
                          <option value="Fees">फीस / लेखा (Fees)</option>
                          <option value="Events">खेल एवं गतिविधियां (Events)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          प्राथमिकता (Priority)
                        </label>
                        <select
                          value={priority}
                          onChange={(e) => setPriority(e.target.value as NoticePriority)}
                          className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                        >
                          <option value="normal">सामान्य सूचना (Normal)</option>
                          <option value="urgent">अति-महत्वपूर्ण / फ्लैश नोटिस (Urgent)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          लक्षित वर्ग (Audience)
                        </label>
                        <select
                          value={targetAudience}
                          onChange={(e) => setTargetAudience(e.target.value as TargetAudience)}
                          className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                        >
                          <option value="All">सभी के लिए (All Students & Parents)</option>
                          <option value="Students">केवल विद्यार्थी (Students)</option>
                          <option value="Parents">केवल अभिभावक (Parents)</option>
                          <option value="Faculty">शिक्षक एवं स्टाफ (Faculty)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          परिपत्र क्रमांक (Circular No. - ऐच्छिक)
                        </label>
                        <input
                          type="text"
                          value={circularNumber}
                          onChange={(e) => setCircularNumber(e.target.value)}
                          placeholder="उदा: AVN/2026-27/CIR-99"
                          className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        विस्तृत सूचना सामग्री (Notice Full Text) <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={6}
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="यहाँ सूचना का सम्पूर्ण विवरण टाइप करें... जैसे ही आप टाइप करेंगे, दाईं ओर लाइव प्रीव्यू दिखेगा।"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/30 focus:border-amber-700 leading-relaxed font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        जारीकर्ता (Author / Designation)
                      </label>
                      <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="उदा: प्रधानाचार्य कार्यालय (Principal Office)"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-5 bg-amber-800 hover:bg-amber-900 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>नोटिस बोर्ड पर तुरंत प्रकाशित करें (Publish Notice)</span>
                    </button>
                  </form>

                  {/* Right Column: LIVE REAL-TIME PREVIEW */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>लाइव प्रीव्यू (Real-time Preview)</span>
                      </span>
                      <span className="text-[11px] text-slate-400">
                        बोर्ड पर ऐसा दिखेगा
                      </span>
                    </div>

                    <div className="bg-white border-2 border-dashed border-amber-300 rounded-2xl p-5 shadow-xs flex-1 flex flex-col">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                        {priority === 'urgent' && (
                          <span className="text-rose-700 font-bold flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                            अति-महत्वपूर्ण
                            <span aria-hidden="true">·</span>
                          </span>
                        )}
                        <span className="text-slate-700 font-semibold">{category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{new Date().toISOString().split('T')[0]}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono">{circularNumber || 'AVN/2026-27/LIVE'}</span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 leading-snug mb-2">
                        {title.trim() || 'यहाँ आपका नोटिस शीर्षक दिखाई देगा...'}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line flex-1">
                        {content.trim() ||
                          'जैसे ही आप बाएँ फॉर्म में टाइप करेंगे, यहाँ आपके शब्द तुरंत लाइव नोटिस बोर्ड के प्रारूप में दिखाई देंगे।'}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 italic">
                        <span>जारीकर्ता: {author}</span>
                        <span>लक्षित: {targetAudience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Manage Existing Notices */
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">
                      सभी सक्रिय नोटिस सूची ({notices.length})
                    </h4>
                    <button
                      onClick={resetToDefaultNotices}
                      className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      title="मूल सूचनाओं को पुनः लोड करें"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>डिफ़ॉल्ट नोटिस रीसेट करें</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {notices.map((n) => {
                      const isEditing = editingNoticeId === n.id;

                      if (isEditing) {
                        return (
                          <div
                            key={n.id}
                            className="bg-amber-50/40 border-2 border-amber-400 rounded-xl p-4 space-y-3"
                          >
                            <input
                              type="text"
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                              className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded font-semibold"
                            />
                            <textarea
                              rows={3}
                              value={editContent}
                              onChange={(e) => setEditContent(e.target.value)}
                              className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded"
                            />
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setEditingNoticeId(null)}
                                className="px-3 py-1 text-xs bg-slate-200 hover:bg-slate-300 rounded"
                              >
                                रद्द करें
                              </button>
                              <button
                                onClick={() => saveEdit(n.id)}
                                className="px-3 py-1 text-xs bg-amber-800 text-white rounded font-medium"
                              >
                                सहेजें (Save)
                              </button>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={n.id}
                          className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-slate-300 transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                              {n.isPinned && (
                                <span className="text-amber-700 font-semibold flex items-center gap-0.5">
                                  <Pin className="w-3 h-3 fill-amber-700" />
                                  पिन
                                </span>
                              )}
                              {n.priority === 'urgent' && (
                                <span className="text-rose-700 font-bold">तत्काल</span>
                              )}
                              <span>{n.category}</span>
                              <span aria-hidden="true">·</span>
                              <span>{n.date}</span>
                              {n.circularNumber && (
                                <>
                                  <span aria-hidden="true">·</span>
                                  <span className="font-mono text-slate-400">{n.circularNumber}</span>
                                </>
                              )}
                            </div>
                            <h5 className="text-sm font-semibold text-slate-900 truncate">
                              {n.title}
                            </h5>
                            <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                              {n.content}
                            </p>
                          </div>

                          <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
                            <button
                              onClick={() => togglePin(n.id)}
                              className={`p-1.5 rounded transition-colors text-xs ${
                                n.isPinned
                                  ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                              }`}
                              title={n.isPinned ? 'अनपिन करें' : 'पिन करें'}
                            >
                              <Pin className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => startEditing(n)}
                              className="p-1.5 text-slate-500 hover:text-amber-800 hover:bg-slate-100 rounded text-xs transition-colors"
                              title="संपादित करें"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => deleteNotice(n.id)}
                              className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded text-xs transition-colors"
                              title="हटाएं"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
