import React from 'react';
import { useNotice } from '../context/NoticeContext';
import { MapPin, Phone, Mail, Clock, Lock, Bell } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setIsNoticeModalOpen, setIsAdminModalOpen, isAdmin } = useNotice();

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: School Identity */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight font-crest">
              ADARSH VIDYA NIKETAN
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              सीबीएसई संबद्धता संख्या 2130894। 28 वर्षों से गुणवत्तापूर्ण शिक्षा, नैतिक संस्कारों और तकनीकी दक्षता के साथ राष्ट्र निर्माण में समर्पित।
            </p>
            <div className="text-xs text-amber-400 font-medium">
              स्कूल कोड: 08241 · स्थापना वर्ष: 1998
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              त्वरित संपर्क सूत्र
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  विद्यालय परिचय (About Us)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-300 transition-colors">
                  पाठ्यक्रम एवं संकाय (Academics)
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-300 transition-colors">
                  प्रयोगशालाएं एवं खेल मैदान
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-300 transition-colors">
                  प्रवेश नियमावली (Admissions)
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsNoticeModalOpen(true)}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Bell className="w-3.5 h-3.5 text-amber-400" />
                  <span>पॉपअप नोटिस बोर्ड (Notice Board)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              संपर्क सूत्र (Contact)
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>ज्ञान विहार परिसर, सेक्टर 4, दिल्ली रोड, पिन- 201001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 98765 43210, 011-23456789</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@adarshvidyaniketan.edu.in</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>कार्यालय समय: प्रातः 8:00 से अप. 3:00 (सोम-शनि)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Administrative Portal Access */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              प्रशासनिक लॉगिन
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              नोटिस बोर्ड पर नई सूचना प्रकाशित करने अथवा विद्यमान परिपत्रों को प्रबंधित करने हेतु अधिकृत स्टाफ लॉगिन।
            </p>

            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-400/40 transition-all cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isAdmin ? 'एडमिन पैनल खोलें' : 'एडमिन लॉगिन (admin / 123)'}</span>
            </button>
          </div>
        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Adarsh Vidya Niketan Public School. सर्वाधिकार सुरक्षित।
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400">गोपनीयता नीति</span>
            <span>·</span>
            <span className="hover:text-slate-400">सेवा की शर्तें</span>
            <span>·</span>
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="text-slate-500 hover:text-amber-400 transition-colors"
            >
              स्टाफ पोर्टल
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
