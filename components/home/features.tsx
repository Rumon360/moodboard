import { cn } from "@/lib/utils";
import {
  IconPencil,
  IconUsers,
  IconPalette,
  IconArrowBackUp,
  IconShield,
} from "@tabler/icons-react";

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export function Features() {
  return (
    <div className="relative w-full py-20 border-t">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-3xl text-foreground md:text-5xl">
            Everything you need to create
          </h2>
          <p className="mx-auto max-w-md text-lg text-muted-foreground">
            Powerful features designed for seamless collaboration and creativity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
          {items.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Complete Whiteboard Toolkit",
    description:
      "Professional drawing tools with pencil, shapes (rectangles, circles, arrows), sticky notes, and text. Everything you need to bring your ideas to life with layering and z-index controls.",

    icon: <IconPencil className="h-4 w-4 text-purple-600" />,
  },
  {
    title: "Advanced Color System",
    description:
      "Full color palette with custom colors, gradients, and intelligent coloring system for all your creative needs.",

    icon: <IconPalette className="h-4 w-4 text-purple-600" />,
  },
  {
    title: "Smart Workflow",
    description:
      "Unlimited undo & redo functionality with keyboard shortcuts to speed up your creative process and never lose your work.",

    icon: <IconArrowBackUp className="h-4 w-4 text-purple-600" />,
  },
  {
    title: "Real-time Collaboration",
    description:
      "Work together seamlessly with your team in real-time. See cursors, edits, and changes as they happen. Built on a real-time database for instant synchronization across all devices.",

    icon: <IconUsers className="h-4 w-4 text-purple-600" />,
  },
  {
    title: "Enterprise Ready",
    description:
      "Complete authentication system with organizations, team invites, and favoriting functionality to keep your boards organized.",

    icon: <IconShield className="h-4 w-4 text-purple-600" />,
  },
];
