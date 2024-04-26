import { useState } from "react";

export const useToggleShowMore = (strings: string, maxLength: number) => {
    const [showMore, setShowMore] = useState(()=> {
        return strings.length >= maxLength
    })

    const toggleShowMore = ()=> {
        setShowMore(prevState => !prevState)
    }


    const text = showMore ? strings : (strings.slice(0, maxLength) + '...');

    return {text, toggleShowMore, isShowMore: showMore}


}