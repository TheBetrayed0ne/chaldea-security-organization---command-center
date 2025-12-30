// File: components/HRDepartment.tsx
import React, { useState, useMemo } from 'react';
import { useGlobalStatus } from '../context/StatusContext.tsx';
import { soundService } from '../services/soundService.ts';

import { HRTab, StaffMember } from './HRDepartment/types/index.ts';
import { HR_STAFF } from './HRDepartment/config/staffData.ts';
import { POLICIES } from './HRDepartment/config/policiesData.ts';
import { MediationItem } from './HRDepartment/components/MediationItem.tsx';
import { QueueItem } from './HRDepartment/components/QueueItem.tsx';
import { DetailField } from './HRDepartment/components/DetailField.tsx';
import { StatusBox } from './HRDepartment/components/StatusBox.tsx';
import { BoundaryRule } from './HRDepartment/components/BoundaryRule.tsx';

const HRDepartment: React.FC = () => {
  const { status } = useGlobalStatus();
  const [activeTab, setActiveTab] = useState<HRTab>('Dashboard');
  const [selectedPerson, setSelectedPerson] = useState<StaffMember | null>(null);
  const [typeFilter, setTypeFilter] = useState<string>('All');

  // Concerns Form State
  const [concernCategory, setConcernCategory] = useState('Interpersonal / Harassment');
  const [concernDescription, setConcernDescription] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Policy State
  const [selectedPolicyCat, setSelectedPolicyCat] = useState<string>('All');
  const [readingPolicyId, setReadingPolicyId] = useState<string | null>(null);

  // Get zoom behavior class based on settings
  const zoomClass = status.settings.display.allowSmallWindowGrowth ? '' : 'zoom-fixed';

  const switchTab = (tab: HRTab) => {
    soundService.playSelect();
    setActiveTab(tab);
    setReadingPolicyId(null);
    setSubmitSuccess(false);
  };

  const filteredStaff = useMemo(() => {
    if (typeFilter === 'All') return HR_STAFF;
    return HR_STAFF.filter(s => s.type === typeFilter);
  }, [typeFilter]);

  const handleConcernSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!concernDescription.trim()) return;

    setIsSubmitting(true);
    soundService.playTransition();
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setConcernDescription('');
      soundService.playSelect();
    }, 1500);
  };

  const handleCategoryClick = (cat: string) => {
    soundService.playClick();
    setSelectedPolicyCat(cat);
    setReadingPolicyId(null);
  };

  return (
    <div className={`p-10 space-y-8 animate-in fade-in duration-700 max-w-7xl mx-auto font-sans ${zoomClass}`}>
      <style>{`
        .zoom-fixed {
          zoom: ${1 / (window.devicePixelRatio || 1)};
        }
        @media (min-resolution: 120dpi) {
          .zoom-fixed {
            zoom: 0.833;
          }
        }
        @media (min-resolution: 144dpi) {
          .zoom-fixed {
            zoom: 0.694;
          }
        }
        @media (min-resolution: 192dpi) {
          .zoom-fixed {
            zoom: 0.521;
          }
        }
      `}</style>
      <header className="flex justify-between items-end border-b border-slate-200 dark:border-slate-900 pb-8">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-black dark:text-slate-100 flex items-center gap-4 uppercase">
            Human & Allied Resources
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-bold tracking-widest text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50`}>
              SAFEGUARDING_STABLE
            </span>
          </h2>
          <p className="text-slate-500 font-mono text-[10px] mt-2 uppercase tracking-[0.3em] font-bold">
            Conflict Mediation // Entity Rights // Welfare Surveillance
          </p>
        </div>
        <div className="flex gap-2">
          {['Dashboard', 'Personnel Files', 'Concerns', 'Policy', 'Wellbeing', 'Boundaries'].map((tab) => (
            <button
              key={tab}
              onClick={() => switchTab(tab as HRTab)}
              className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                activeTab === tab ? 'bg-cyan-600 text-slate-950 border-cyan-400' : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {activeTab === 'Dashboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in slide-in-from-bottom-4">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-lg relative overflow-hidden shadow-sm dark:shadow-none">
              <div className="absolute top-0 left-0 w-1 h-full bg-rose-500/50"></div>
              <h3 className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-6 font-bold flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></span>
                Human Order Stress Flux [ψ-Resonance]
              </h3>
              <div className="h-40 flex items-end gap-1 px-2">
                {[45, 62, 33, 54, 88, 72, 41, 30, 22, 59, 92, 45, 67, 33, 41, 55, 30, 25, 40].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-rose-500/10 dark:bg-rose-500/20 border-t border-rose-200 dark:border-rose-500/40 hover:bg-rose-200/40 dark:hover:bg-rose-500/40 transition-all rounded-t-sm" 
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[8px] font-mono text-slate-400 dark:text-slate-700 mt-4 uppercase">
                <span>00:00 JST</span>
                <span>Current Observation [Active Lostbelt Shift]</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 rounded-lg shadow-sm dark:shadow-none">
                <h4 className="text-[9px] font-mono text-cyan-600 dark:text-cyan-500 uppercase mb-4 font-bold">Upcoming Mediation</h4>
                <div className="space-y-4">
                   <MediationItem room="K-3" time="15:00" parties="Mordred / Bedivere" status="Confirmed" />
                   <MediationItem room="D-7" time="17:30" parties="Goredolf / Master" status="Pending Cocoa" />
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 rounded-lg shadow-sm dark:shadow-none">
                <h4 className="text-[9px] font-mono text-cyan-600 dark:text-cyan-500 uppercase mb-4 font-bold">Training Overdue</h4>
                <div className="space-y-3 text-[10px] font-mono">
                   <div className="flex justify-between items-center text-rose-600 dark:text-rose-400">
                      <span>Mecha-Eli (Basic Etiquette)</span>
                      <span className="text-[8px] px-1 bg-rose-50 dark:bg-rose-950 border border-rose-200 dark:border-rose-900 rounded">14 DAYS</span>
                   </div>
                   <div className="flex justify-between items-center text-amber-600 dark:text-amber-400">
                      <span>Caesar (Audit Compliance)</span>
                      <span className="text-[8px] px-1 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-900 rounded">2 DAYS</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
             <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-6 rounded-lg backdrop-blur-md shadow-sm dark:shadow-none">
               <h3 className="text-xs font-mono text-cyan-600 dark:text-cyan-500 uppercase tracking-widest mb-4">Emotional Climate Summary</h3>
               <div className="space-y-4">
                 <div className="flex justify-between text-[10px] uppercase font-mono mb-1">
                   <span className="text-slate-500">Global Satisfaction</span>
                   <span className="text-emerald-600 dark:text-emerald-500 font-bold">{status.moraleIndex.toFixed(1)}%</span>
                 </div>
                 <div className="h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: `${status.moraleIndex}%` }}></div>
                 </div>
                 <p className="text-[9px] text-slate-500 font-mono leading-relaxed mt-4 italic">
                    "Notice: 'Existential' levels are slightly elevated following recent rayshift delays."
                 </p>
               </div>
             </div>
          </div>
        </div>
      )}

      {activeTab === 'Personnel Files' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 animate-in fade-in duration-500">
          <div className="lg:col-span-1 space-y-4">
             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold px-2">File Filter</div>
             <div className="space-y-1">
                {['All', 'Staff', 'Servant', 'Entity'].map(c => (
                  <button 
                    key={c} 
                    onClick={() => { soundService.playClick(); setTypeFilter(c); }}
                    className={`w-full text-left px-3 py-2 rounded text-[10px] font-bold uppercase transition-all flex justify-between ${
                      typeFilter === c ? 'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800' : 'text-slate-500 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:text-slate-800 dark:hover:text-slate-400'
                    }`}
                  >
                    <span>{c}</span>
                    <span className="opacity-30">➔</span>
                  </button>
                ))}
             </div>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredStaff.map(p => (
              <button 
                key={p.id}
                onClick={() => setSelectedPerson(p)}
                className={`p-5 rounded-lg border text-left transition-all ${selectedPerson?.id === p.id ? 'bg-slate-50 dark:bg-slate-800 border-cyan-400 dark:border-cyan-500/50 ring-1 ring-cyan-500/20 shadow-md' : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none'}`}
              >
                <div className="flex justify-between items-start mb-2">
                   <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase">{p.name}</h4>
                   <span className="text-[8px] font-mono text-cyan-700 dark:text-cyan-700 border border-cyan-200 dark:border-cyan-900/50 px-1.5 rounded">{p.clearance}</span>
                </div>
                <div className="text-[9px] font-mono text-cyan-600 dark:text-cyan-600 uppercase mb-4">{p.role} // {p.dept}</div>
                <div className="flex flex-wrap gap-1">
                   {p.tags.map(t => (
                     <span key={t} className={`text-[8px] px-1.5 py-0.5 rounded border uppercase ${
                       t.includes('Accommodations') || t.includes('Stress') ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-500' : 'bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-500'
                     }`}>{t}</span>
                   ))}
                </div>
              </button>
            ))}
          </div>

          {selectedPerson && (
             <div className="lg:col-span-4 mt-8 p-8 bg-white dark:bg-slate-900/60 border border-cyan-200 dark:border-cyan-900/30 rounded-xl animate-in zoom-in-95 duration-300 relative overflow-hidden shadow-xl dark:shadow-none">
                <button onClick={() => setSelectedPerson(null)} className="absolute top-4 right-6 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">✕</button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div>
                      <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 uppercase mb-1">{selectedPerson.name}</h3>
                      <p className="text-[10px] font-mono text-cyan-600 dark:text-cyan-500 uppercase tracking-[0.2em]">{selectedPerson.role} // {selectedPerson.dept}</p>
                      <div className="mt-6 space-y-4">
                         <DetailField label="Clearance Protocol" value={selectedPerson.clearance} />
                         <DetailField label="Existence Type" value={selectedPerson.type} />
                         <DetailField label="Contract Hash" value={`SOC_STAFF_${selectedPerson.id}`} />
                      </div>
                   </div>
                   <div className="space-y-6">
                      <div className="bg-slate-50 dark:bg-slate-950/40 p-5 rounded border border-slate-200 dark:border-slate-800">
                         <h5 className="text-[9px] font-mono text-slate-500 uppercase mb-3 font-bold">HR Flags & Notes</h5>
                         <ul className="text-[11px] text-slate-600 dark:text-slate-400 space-y-2 font-mono">
                            {selectedPerson.tags.map(tag => (
                              <li key={tag}>• {tag}</li>
                            ))}
                         </ul>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <h5 className="text-[9px] font-mono text-slate-500 dark:text-slate-500 uppercase font-bold">Personnel Metrics</h5>
                      <div className="grid grid-cols-2 gap-2">
                         <StatusBox label="Efficiency" val="94%" />
                         <StatusBox label="Resilience" val="EX" />
                         <StatusBox label="Status" val={selectedPerson.status} color="text-emerald-600 dark:text-emerald-500" />
                         <StatusBox label="Compliance" val="100%" />
                      </div>
                      <button className="w-full mt-4 py-2 bg-slate-800 text-white text-[10px] font-bold uppercase rounded hover:bg-slate-700 transition-colors">Request Archive Link</button>
                   </div>
                </div>
             </div>
          )}
        </div>
      )}

      {activeTab === 'Concerns' && (
        <div className="max-w-3xl mx-auto animate-in fade-in duration-500">
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-lg shadow-sm dark:shadow-none">
            <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 uppercase mb-2">Submit a Concern</h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-600 font-mono uppercase tracking-wider mb-6">
              Confidential reporting for workplace issues, conflicts, or safety concerns
            </p>

            {submitSuccess ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 rounded-lg text-center space-y-4 animate-in zoom-in-95">
                <div className="text-4xl">✓</div>
                <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 uppercase">Concern Submitted</h4>
                <p className="text-sm text-emerald-600 dark:text-emerald-500">
                  Your concern has been logged. HR will review within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white text-xs font-bold uppercase rounded hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleConcernSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">Category</label>
                  <select
                    value={concernCategory}
                    onChange={(e) => setConcernCategory(e.target.value)}
                    className="w-full p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded text-sm"
                  >
                    <option>Interpersonal / Harassment</option>
                    <option>Safety / Security</option>
                    <option>Discrimination / Bias</option>
                    <option>Policy Violation</option>
                    <option>Workload / Burnout</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">Description</label>
                  <textarea
                    value={concernDescription}
                    onChange={(e) => setConcernDescription(e.target.value)}
                    rows={6}
                    placeholder="Please describe the concern in detail..."
                    className="w-full p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded text-sm resize-none"
                    required
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <label htmlFor="anonymous" className="text-sm text-slate-600 dark:text-slate-400">
                    Submit anonymously
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 text-sm font-bold uppercase rounded transition-colors ${
                    isSubmitting
                      ? 'bg-slate-400 text-slate-200 cursor-not-allowed'
                      : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Concern'}
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-6 rounded-lg">
            <h4 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase mb-2">Concern Queue Status</h4>
            <div className="space-y-2">
              <QueueItem stage="Intake" label="Concern #2401-A: Workload Distribution" date="2024-12-28" />
              <QueueItem stage="Review" label="Concern #2401-B: Team Conflict Resolution" date="2024-12-27" />
              <QueueItem stage="Resolved" label="Concern #2400-Z: Equipment Request" date="2024-12-20" />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Policy' && (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
          <div className="flex gap-4 mb-6">
            {['All', 'Mandatory', 'Guidance', 'Technical'].map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase rounded transition-all ${
                  selectedPolicyCat === cat
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-cyan-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {POLICIES.filter(p => selectedPolicyCat === 'All' || p.cat === selectedPolicyCat).map(policy => (
              <div key={policy.id} className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm dark:shadow-none">
                <button
                  onClick={() => {
                    soundService.playClick();
                    setReadingPolicyId(readingPolicyId === policy.id ? null : policy.id);
                  }}
                  className="w-full p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors flex justify-between items-center"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-500">{policy.id}</span>
                      <span className={`text-[8px] px-2 py-0.5 rounded border font-bold uppercase ${
                        policy.cat === 'Mandatory' ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400' :
                        policy.cat === 'Guidance' ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400' :
                        'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                      }`}>
                        {policy.cat}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{policy.title}</h4>
                  </div>
                  <span className="text-slate-400">{readingPolicyId === policy.id ? '▼' : '▶'}</span>
                </button>

                {readingPolicyId === policy.id && (
                  <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 animate-in slide-in-from-top-2">
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{policy.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Wellbeing' && (
        <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-lg shadow-sm dark:shadow-none">
                <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 uppercase mb-4">Mental Health Resources</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/20 rounded">
                    <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-2">24/7 Crisis Support</h4>
                    <p className="text-xs text-emerald-600 dark:text-emerald-500">Contact Medical Bay for immediate assistance with mental health emergencies.</p>
                  </div>

                  <div className="p-4 border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/20 rounded">
                    <h4 className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-2">Counseling Services</h4>
                    <p className="text-xs text-blue-600 dark:text-blue-500">Weekly sessions available with certified professionals. Book via Medical or HR.</p>
                  </div>

                  <div className="p-4 border border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-950/20 rounded">
                    <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400 mb-2">Peer Support Groups</h4>
                    <p className="text-xs text-purple-600 dark:text-purple-500">Join support groups for stress management, rayshift recovery, and more.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-lg shadow-sm dark:shadow-none">
                <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 uppercase mb-4">Accommodations Requests</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Chaldea provides accommodations for physical, mental, and existential needs. All requests are confidential.
                </p>
                <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold uppercase rounded transition-colors">
                  Request Accommodation
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-6 rounded-lg shadow-sm dark:shadow-none">
                <h4 className="text-xs font-bold text-cyan-600 dark:text-cyan-500 uppercase mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="block p-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors">
                    → Self-Care Resources
                  </a>
                  <a href="#" className="block p-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors">
                    → Stress Management
                  </a>
                  <a href="#" className="block p-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors">
                    → Grief Support
                  </a>
                  <a href="#" className="block p-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors">
                    → Work-Life Balance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Boundaries' && (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-lg shadow-sm dark:shadow-none mb-8">
            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 uppercase mb-4">Facility Boundaries & Protocols</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Clear boundaries ensure safety and respect across all personnel types. These protocols are non-negotiable.
            </p>

            <div className="space-y-8">
              <BoundaryRule
                zone="Physical Contact"
                color="text-rose-600 dark:text-rose-400"
                rules={[
                  "Obtain verbal consent before any physical contact",
                  "Respect personal space (minimum 1 meter unless authorized)",
                  "Combat training requires documented safety agreements",
                  "Medical staff have emergency override authority only"
                ]}
              />

              <BoundaryRule
                zone="Mental / Psychic"
                color="text-purple-600 dark:text-purple-400"
                rules={[
                  "No unauthorized telepathy, mind-reading, or mental influence",
                  "Servants with mental interference abilities must register with HR",
                  "Dreamwalking requires written consent from all parties",
                  "Report suspected mental manipulation immediately"
                ]}
              />

              <BoundaryRule
                zone="Temporal / Reality"
                color="text-cyan-600 dark:text-cyan-400"
                rules={[
                  "No personal timeline alterations without TRISMEGISTUS approval",
                  "Reality Marbles must be pre-authorized for use in facility",
                  "Do not bring items from other timelines without clearance",
                  "Report all temporal anomalies within 5 minutes"
                ]}
              />

              <BoundaryRule
                zone="Existential / Contractual"
                color="text-amber-600 dark:text-amber-400"
                rules={[
                  "Soul contracts require HR witness and legal review",
                  "No cursing, geassing, or binding without mutual consent",
                  "Entity rights apply regardless of physical form",
                  "Servants cannot be 'loaned' without their explicit agreement"
                ]}
              />
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 p-6 rounded-lg">
            <h4 className="text-sm font-bold text-rose-700 dark:text-rose-400 uppercase mb-3">Reporting Violations</h4>
            <p className="text-sm text-rose-600 dark:text-rose-500 mb-4">
              Boundary violations are taken seriously. Report any incidents to HR or Medical immediately.
            </p>
            <button
              onClick={() => switchTab('Concerns')}
              className="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold uppercase rounded transition-colors"
            >
              Report Violation
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default HRDepartment;