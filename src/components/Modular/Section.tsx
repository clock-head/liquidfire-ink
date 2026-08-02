import React from 'react';
import './Section.css';
import { useLayout } from './contexts/layout/LayoutContext';
import type { SectionSettings } from './ModularTypes/SectionSettings';
import { SectionClassBuilder } from './builders/SectionClassBuilder';

const Section = ({ children, ...props }: SectionSettings) => {
  const { context } = useLayout();
  const className = SectionClassBuilder.build(props, context?.section || {});

  return <section className={`${className}`}>{children}</section>;
};

export default Section;
