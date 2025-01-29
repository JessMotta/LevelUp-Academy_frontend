interface SubjectActivityTemplateProps {
  activityId: string;
}

export default function SubjectActivityTemplate({
  activityId,
}: SubjectActivityTemplateProps) {
  return <div className="text-white">Página da atividade #{activityId}</div>;
}
