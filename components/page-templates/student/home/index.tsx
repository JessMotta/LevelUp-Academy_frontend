import { MOCK_AUTH } from "@/__mocks__/auth";
import CardUser from "@/components/ui/CardUser";
import { SubjectList } from "@/components/ui/SubjectList";

export default function StudentHomeTemplate() {
  return (
    <div className="w-full flex flex-col justify-center gap-y-3">
      <CardUser student={MOCK_AUTH} />
      <SubjectList />
    </div>
  );
}
