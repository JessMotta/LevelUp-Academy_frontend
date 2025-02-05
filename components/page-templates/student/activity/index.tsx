
//import { useActivityContext } from "@/providers/ActivityProvider";

import ButtonsActivity from "@/components/ui/ButtonsActivity";
import FeedbackActivity from "@/components/ui/FeebackActivity";
//import { useActivityContext } from "@/providers/ActivityProvider";

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
      <FeedbackActivity/>
    </div>
  )
  
}
