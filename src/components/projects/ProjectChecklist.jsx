import Checklist from "../common/Checklist";
import { projectTheme } from "./projectTheme";

function ProjectChecklist({ items }) {
  return (
    <Checklist
      items={items}
      color={projectTheme.body}
      accentColor={projectTheme.purple}
      spacing={1.2}
      gap={1.2}
    />
  );
}

export default ProjectChecklist;
