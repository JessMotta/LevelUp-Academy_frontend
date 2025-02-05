
//import { useActivityContext } from "@/providers/ActivityProvider";

import ButtonsActivity from "@/components/ui/ButtonsActivity";

interface SubjectActivityTemplateProps {
  activityId: string;
}

export default function SubjectActivityTemplate({
  activityId
}: SubjectActivityTemplateProps) {
  //const {complete} = useActivityContext();


  return (
    <div className="text-white">{activityId}
      <ButtonsActivity />
    </div>
  )
  
}
