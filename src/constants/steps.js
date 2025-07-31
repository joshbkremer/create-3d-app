import {
  CloudUpload as UploadIcon,
  Transform as TransformIcon,
  Print as PrintIcon,
  Palette as PaintIcon
} from '@mui/icons-material';

export const PROCESS_STEPS = [
  {
    title: "Step 1: Child's Drawing",
    description: "A child uploads their hand-drawn creature - like this friendly green dinosaur with orange spikes, drawn with crayons on paper.",
    icon: <UploadIcon />,
    image: "/step1.png",
    color: "#10B981"
  },
  {
    title: "Step 2: 2D Creature Creation",
    description: "Our AI transforms the child's drawing into a clean, colorful 2D creature while preserving the child's artistic vision and style.",
    icon: <TransformIcon />,
    image: "/step2.png",
    color: "#F59E0B"
  },
  {
    title: "Step 3: 3D Model Generation",
    description: "The 2D creature is converted into a detailed 3D model, ready for printing with all the child's original design elements.",
    icon: <PrintIcon />,
    image: "/step3.png",
    color: "#6366F1"
  },
  {
    title: "Step 4: Paintable 3D Creature",
    description: "The final 3D printed creature arrives with paint supplies, ready for the child to bring their creation to life with colors!",
    icon: <PaintIcon />,
    image: "/step4.png",
    color: "#8B5CF6"
  }
]; 