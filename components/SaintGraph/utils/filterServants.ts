// File: components/SaintGraph/utils/filterServants.ts
import { Servant } from '../../../types.ts';
import { SaintGraphFilters } from '../types.ts';

export const filterServants = (servants: Servant[], filters: SaintGraphFilters): Servant[] => {
  const { search, classFilter, deptFilters, hazardFilters, alignmentFilters } = filters;
  
  return servants.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesClass = classFilter === 'All' || s.class === classFilter;
    
    const matchesDept = deptFilters.length === 0 || 
      (s.metadata?.department && deptFilters.includes(s.metadata.department));
      
    const matchesHazard = hazardFilters.length === 0 || 
      (s.metadata?.hazardLevel && hazardFilters.includes(s.metadata.hazardLevel));

    const matchesAlignment = alignmentFilters.length === 0 || 
      (s.metadata?.alignment && alignmentFilters.includes(s.metadata.alignment));
    
    return matchesSearch && matchesClass && matchesDept && matchesHazard && matchesAlignment;
  });
};
