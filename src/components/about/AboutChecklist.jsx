import Checklist from "../common/Checklist";
import { aboutTheme } from "./aboutTheme";

function AboutChecklist({ items }) {
  return (
    <Checklist
      items={items}
      color={aboutTheme.body}
      accentColor={aboutTheme.purple}
      spacing={1.6}
      gap={1.1}
    />
  );
}

export default AboutChecklist;
