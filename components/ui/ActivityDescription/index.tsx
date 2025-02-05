"use client";

import { useSubjectContext } from "@/providers/SubjectProvider";
interface ActivityDescriptionProps {
  activityId: string;
}

export default function ActivityDescription ({activityId}: ActivityDescriptionProps){
  const {activities} = useSubjectContext();
  const activity = activities.find(activity => activity.id === parseInt(activityId));
  console.log(activity);
  const member = activity?.inGroup
    ? activity.studentsPerGroup === 2
      ? "Dupla"
      : "Em grupo"
    : "Individual";

    return (
        <div className="bg-green-11 rounded-xl text-white p-4 mb-3">
            <h2 className="font-semibold">{activity?.name}</h2>
            <div className="flex flex-row items-center">
                <h3 className="text-sm">{member}</h3>
                {member !== "Individual" ? (
                  <button
                      onClick={() => console.log("Clicou")}
                      className="text-xs text-white underline text-end p-2"
                    >
                      Veja quem está no seu grupo
                  </button>
                  
                ): <></>
                }
                
            </div>
            <p className="text-sm mt-5">{activity?.description} </p>
        </div>
    )

}