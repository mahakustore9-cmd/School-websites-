import React, { useState } from 'react';
import { useNotice } from '../context/NoticeContext';
import { CheckCircle2, Send, FileText, CalendarCheck, PhoneCall, HelpCircle } from 'lucide-react';

export const AdmissionSection: React.FC = () => {
  const { showToast, setIsNoticeModalOpen } = useNotice();

  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedClass, setSelectedClass] = useState('Nursery');
  const [message, setMessage] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim()) {
      showToast('कृपया छात्र का नाम और संपर्क नंबर अवश्य भरें।', 'error');
      return;
    }

    const refNo = `AVN-ADM-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refNo);
    showToast(`प्रवेश पूछताछ सफलतापूर्वक दर्ज हुई! संदर्भ क्रमांक: ${refNo}`, 'success');
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setStudentName('');
    setParentName('');
    setPhone('');
    setEmail('');
    setSelectedClass('Nursery');
    setMessage('');
  };

  return (
    <section id="admissions" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2">
                <span>प्रवेश प्रक्रिया 2026-27</span>
                <span aria-hidden="true">·</span>
                <span>Admissions Open</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
                अपने बच्चे के उज्ज्वल भविष्य की शुरुआत करें
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                कक्षा नर्सरी से 9वीं एवं 11वीं के लिए पंजीकरण प्रक्रिया प्रारंभ हो चुकी है। सीमित सीटों पर योग्यता एवं साक्षात्कार के आधार पर प्रवेश।
              </p>
            </div>

            {/* Admission Steps */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200">
                <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">ऑनलाइन पंजीकरण</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    दाईं ओर दिए गए फॉर्म को भरकर अपनी प्राथमिक जानकारी जमा करें।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200">
                <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">परिसर भ्रमण एवं काउंसलिंग</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    हमारे प्रवेश काउंसलर्स से मिलकर विद्यालय की कार्यप्रणाली समझें।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200">
                <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">प्रवेश औपचारिकताएं पूर्ण करें</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    जन्म प्रमाण पत्र, पूर्व कक्षा की अंकतालिका एवं आवश्यक शुल्क जमा कर सीट सुरक्षित करें।
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-900 text-white flex items-center justify-between">
              <div>
                <p className="text-xs text-amber-200">प्रवेश हेल्पलाइन नंबर</p>
                <p className="text-sm font-bold mt-0.5">+91 98765 43210 / 011-23456789</p>
              </div>
              <button
                onClick={() => setIsNoticeModalOpen(true)}
                className="text-xs font-semibold underline text-amber-200 hover:text-white"
              >
                प्रवेश नोटिस देखें
              </button>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              {submittedRef ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    पूछताछ सफलतापूर्वक प्राप्त हुई!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    आपके द्वारा दी गई जानकारी हमारे प्रवेश विभाग में सुरक्षित हो चुकी है। हमारे वरिष्ठ काउंसलर 24 घंटे के भीतर आपसे संपर्क करेंगे।
                  </p>
                  <div className="inline-block bg-slate-100 border border-slate-200 px-4 py-2 rounded-lg text-xs font-mono font-bold text-slate-800">
                    संदर्भ क्रमांक (Ref No): {submittedRef}
                  </div>
                  <div>
                    <button
                      onClick={handleReset}
                      className="mt-3 px-4 py-2 text-xs font-semibold text-amber-800 hover:text-amber-900 underline"
                    >
                      एक और पूछताछ फॉर्म भरें
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-slate-900">
                      प्रवेश पूछताछ फॉर्म (Admission Enquiry 2026-27)
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      कृपया सभी विवरण सही-सही भरें ताकि विद्यालय कार्यालय आपसे संपर्क कर सके।
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        विद्यार्थी का नाम (Student Name) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="उदा: आयुष वर्मा"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        अभिभावक का नाम (Parent / Guardian Name)
                      </label>
                      <input
                        type="text"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="उदा: श्री सुरेश वर्मा"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        मोबाइल नंबर (Phone Number) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="उदा: 9876543210"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        ईमेल पता (Email Address)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="parent@example.com"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        प्रवेश हेतु कक्षा (Grade Seeking Admission)
                      </label>
                      <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                      >
                        <option value="Nursery">Nursery / Playgroup</option>
                        <option value="KG">LKG / UKG</option>
                        <option value="Class 1 to 5">Class 1 to 5 (Primary)</option>
                        <option value="Class 6 to 8">Class 6 to 8 (Middle)</option>
                        <option value="Class 9 & 10">Class 9 & 10 (Secondary)</option>
                        <option value="Class 11 Science">Class 11 (Science - PCM/PCB)</option>
                        <option value="Class 11 Commerce">Class 11 (Commerce)</option>
                        <option value="Class 11 Humanities">Class 11 (Arts / Humanities)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        निवास क्षेत्र / शहर (City / Area)
                      </label>
                      <input
                        type="text"
                        placeholder="उदा: सेक्टर 12 / शास्त्री नगर"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      कोई विशेष प्रश्न या टिप्पणी (Any Specific Query)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="बस रूट, हॉस्टल या छात्रवृत्ति संबंधी कोई जानकारी चाहिए तो यहाँ लिखें..."
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-amber-800 hover:bg-amber-900 text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>प्रवेश पूछताछ सबमिट करें (Submit Enquiry)</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
