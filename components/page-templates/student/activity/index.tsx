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
    <div className="text-white">Página da atividade #{activityId}
      <FeedbackActivity/>
    </div>
  )
  
}
