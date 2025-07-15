
import React from 'react';

export interface Category {
  name: string;
  icon: React.ReactNode;
}

export interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  datePosted: string;
  type: 'Jornada Completa' | 'Media Jornada';
}
