import CameraMan from "../../public/camera-man.svg";
import PlanDesign from "../../public/plan-design.svg";
import PlanDevelop from "../../public/plan-develop.svg";
import PlanLaunch from "../../public/plan-launch.svg";

const processSteps = [
  {
    id: "idea",
    title: "Idea",
    icon: CameraMan,
    activeIcon: CameraMan,
    titleDescription: "Your vision is unique",
    description:
      "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let's shape it.",
  },
  {
    id: "design",
    title: "Design",
    icon: PlanDesign,
    activeIcon: PlanDesign,
    titleDescription: "Crafting the blueprint for success",
    description:
      "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
  },
  {
    id: "develop",
    title: "Develop",
    icon: PlanDevelop,
    activeIcon: PlanDevelop,
    titleDescription: "Turning blueprints into reality.",
    description:
      "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
  },
  {
    id: "launch",
    title: "Launch",
    icon: PlanLaunch,
    activeIcon: PlanLaunch,
    titleDescription: "Your launchpad to the market.",
    description:
      "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
  },
];

export default processSteps;
