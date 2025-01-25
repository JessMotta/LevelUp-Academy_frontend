export default function StudentSubjectPage({
  params,
}: {
  params: { slug: string };
}) {
  return <span>Disciplina: {params.slug}</span>;
}
