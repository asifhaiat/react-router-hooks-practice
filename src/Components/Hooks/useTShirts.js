import { useEffect, useState } from "react"

const useTShirts = () => {
    const [tShirts, setTShirts] = useState([]);

    useEffect( () => {
        fetch('t-shirt.json')
        .then(res => res.json())
        .then(data => setTShirts(data));
    }, [])

    return [tShirts, setTShirts];
}

export default useTShirts;