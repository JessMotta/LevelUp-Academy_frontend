import useAPIRequest from "../api";
import {useState} from "react";
import { ActivityData } from "@/types/types";
import { ACTIVITY_DATA_MOCK } from "@/__mocks__/activityMainData";


export default function useActivityData(subjectId: string, activityId: string){
    const req = useAPIRequest("GET", `/student/classroom/${subjectId}/activities/${activityId}`);
   

    const [loading, setLoading] = useState<boolean>(false);
    async function submitMock() {
        setLoading(true);
        await setTimeout(() => {
            setLoading(false);
        }, 1500);
        return ACTIVITY_DATA_MOCK as unknown as ActivityData;
    }
    return {...req, loading, submit: submitMock}
}