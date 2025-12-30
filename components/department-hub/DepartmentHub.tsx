import React from 'react';
import { useGlobalStatus } from '../../context/StatusContext.tsx';
import { soundService } from '../../services/soundService.ts';

interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const DEPARTMENTS: Department[] = [
  {
    id: 'operations',
    name: 'Operations',
    description: 'Core facility operations, Rayshift control, and mission oversight',
    icon: '⚙️',
    color: 'cyan'
  },
  {
    id: 'medical',
    name: 'Medical',
    description: 'Staff health monitoring, emergency care, and Master vitals',
    icon: '✚',
    color: 'emerald'
  },
  {
    id: 'logistics',
    name: 'Logistics',
    description: 'Resource management, supply chain, and equipment maintenance',
    icon: '📦',
    color: 'amber'
  },
  {
    id: 'communications',
    name: 'Communications',
    description: 'Internal messaging, ChaldExNet, and external liaison',
    icon: '📡',
    color: 'blue'
  }
];

interface DepartmentHubProps {
  onSelectDepartment: (departmentId: string) => void;
}

const DepartmentHub: React.FC<DepartmentHubProps> = ({ onSelectDepartment }) => {
  const { status } = useGlobalStatus();

  const handleDepartmentClick = (departmentId: string) => {
    soundService.playSelect();
    setTimeout(() => {
      onSelectDepartment(departmentId);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8 flex flex-col items-center animate-in fade-in duration-1000">
      <div className="w-full max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-black text-slate-100 tracking-[0.3em] uppercase mb-4">
            Department Hub
          </h1>
          <p className="text-sm text-cyan-500 tracking-[0.2em] uppercase font-mono mb-2">
            Staff Member: {status.staff.memberName || 'Unknown'}
          </p>
          <p className="text-[10px] text-slate-500 tracking-[0.15em] uppercase font-mono">
            Select department to access specialized command terminals
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept.id}
              onClick={() => handleDepartmentClick(dept.id)}
              className={`
                group relative p-8 rounded-lg border-2 transition-all duration-300
                border-${dept.color}-500/30 bg-slate-900/40
                hover:border-${dept.color}-500 hover:bg-slate-800/60
                hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
                text-left
              `}
            >
              <div className="flex items-start gap-6">
                <div className={`
                  text-5xl p-4 rounded-lg
                  bg-${dept.color}-500/10
                  group-hover:bg-${dept.color}-500/20
                  transition-colors
                  border border-${dept.color}-500/30
                `}>
                  {dept.icon}
                </div>

                <div className="flex-1">
                  <h2 className={`
                    text-xl font-bold text-slate-100 uppercase tracking-wider mb-2
                    group-hover:text-${dept.color}-400 transition-colors
                  `}>
                    {dept.name}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-${dept.color}-500 shadow-[0_0_8px_currentColor]`}></div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                      Access Authorized
                    </span>
                  </div>
                </div>

                <div className={`
                  text-${dept.color}-500 opacity-0 group-hover:opacity-100
                  transition-opacity text-2xl
                `}>
                  →
                </div>
              </div>

              <div className={`
                absolute inset-0 rounded-lg bg-gradient-to-br
                from-${dept.color}-500/0 to-${dept.color}-500/5
                opacity-0 group-hover:opacity-100 transition-opacity
                pointer-events-none
              `}></div>
            </button>
          ))}
        </div>

        <footer className="text-center">
          <p className="text-[8px] text-slate-700 uppercase tracking-widest italic">
            Department access logged via CHALDEAS monitoring protocol
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DepartmentHub;
