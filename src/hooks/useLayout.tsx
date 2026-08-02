import { useContext } from 'react';
import { LayoutContext } from '../components/Modular/contexts/layout/LayoutContext';

export const useLayout = () => useContext(LayoutContext);
