import {useState, useEffect, useRef} from "react"; 
function useHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null)
    function enter() {
        setHovered(true)
    }
    function leave() {
        setHovered(false)
    }
    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)

        // clean up the event listeners after it unmounts
        return () => {
            ref.current.addEventListener("mouseenter", enter)
            ref.current.addEventListener("mouseleave", leave)
        }
    }, [])
    // need to give access to the hovered state and ref 
    return [hovered, ref]
}

export default useHover; 