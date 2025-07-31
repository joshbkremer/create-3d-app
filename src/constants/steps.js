import {
  CloudUpload as UploadIcon,
  Transform as TransformIcon,
  Print as PrintIcon,
  Palette as PaintIcon
} from '@mui/icons-material';

export const PROCESS_STEPS = [
  {
    title: "Step 1: Imagined Creature",
    description: "Upload your hand-drawn creature or realistic creature image.",
    icon: <UploadIcon />,
    image: "/step1.png",
    color: "#10B981"
  },
  {
    title: "Step 2: 2D Creature Creation",
    description: "Our AI transforms the drawing into a clean, colorful 2D creature while preserving your artistic vision and style.",
    icon: <TransformIcon />,
    image: "/step2.png",
    color: "#F59E0B"
  },
  {
    title: "Step 3: 3D Model Generation",
    description: "The 2D creature is converted into a detailed 3D model, ready for printing with all the original design elements.",
    icon: <PrintIcon />,
    image: "/step3.png",
    color: "#6366F1"
  },
  {
    title: "Step 4: Paintable 3D Creature",
    description: "The final 3D printed creature arrives with paint supplies, ready for you to bring your creation to life with colors!",
    icon: <PaintIcon />,
    image: "/step4.jpg",
    color: "#8B5CF6"
  }
]; 