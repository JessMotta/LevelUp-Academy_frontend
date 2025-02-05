import ActivityDescription from "@/components/ui/ActivityDescription";
import Button from "@/components/ui/Button";
import { ButtonPDF } from "@/components/ui/ButtonPDF";
import ButtonUploadActivity from "@/components/ui/ButtonUploadActivity";
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
    <div className="text-white">
      <ActivityDescription activityId={activityId}/>
      <ButtonPDF />
      <ButtonUploadActivity activityId={activityId}/>
      <FeedbackActivity activityId={activityId}/>
      <Button/>
    </div>
  )
  
}
