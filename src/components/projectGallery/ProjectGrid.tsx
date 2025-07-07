import { ProjectCard } from './ProjectCard';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Home',
    image: '/gallery/top1.jpg',
    description: 'A custom-built modern home with sustainable materials and open living spaces.',
  },
  {
    id: '2',
    title: 'Commercial Project',
    image: '/gallery/top2.jpg',
    description:
      'A large-scale commercial build for a local business, featuring energy-efficient design.',
  },
  {
    id: '3',
    title: 'Renovation',
    image: '/gallery/top3.jpg',
    description:
      'Complete renovation of a historic Monterey property, preserving its original charm.',
  },
  {
    id: '4',
    title: 'Custom Kitchen',
    image: '/gallery/top4.jpg',
    description: 'A chef-inspired kitchen remodel with premium finishes and smart appliances.',
  },
  {
    id: '5',
    title: 'Outdoor Living',
    image: '/gallery/top5.jpg',
    description: 'Outdoor living space with deck, pergola, and fire pit for year-round enjoyment.',
  },
];

/**
 * ProjectGrid displays a grid of ProjectCard components
 */
export function ProjectGrid() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}
