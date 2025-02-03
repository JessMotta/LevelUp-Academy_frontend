import useActivityData from "@/api/requests/activityData";
import { useContext, createContext, useState, useEffect } from "react"


interface ActivityContext {
    activityId: string | undefined;
    subjectId: string | undefined;
    complete: boolean;
    value: number;
}

const DEFAULT_VALUES: ActivityContext = {
    activityId: undefined,
    subjectId: undefined,
    complete: false,
    value: 0,
}

const ActivityContext = createContext<ActivityContext>(DEFAULT_VALUES);

export const useActivityContext = () => {
    const context = useContext(ActivityContext);

    if (context === undefined) {
        throw new Error("Missing ActivityContext on React tree");
    }

    return context;
}

export const ActivityProvider = ({
    children,
    activityId,
    subjectId,
}: {
    children: React.ReactNode; 
    activityId: string;
    subjectId: string;
}) => {
    const [complete, setComplete] = useState<boolean>(DEFAULT_VALUES.complete);
    
    const [value, setValue] = useState<number>(DEFAULT_VALUES.value);

    useEffect(()=>{
        requestActivityData();
    }, [activityId])

    const currActivityRequest = useActivityData(subjectId, activityId);
    async function requestActivityData() {
        const data = await currActivityRequest.submit();
        setComplete(data.complete);
        setValue(data.value);
        console.log('data', data)
    }
    const activityValue = {
        activityId,
        subjectId,
        complete,
        value,
    }
    return(
        <ActivityContext.Provider value={activityValue}>{children}</ActivityContext.Provider>
    )

}