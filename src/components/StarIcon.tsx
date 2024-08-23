import { Star } from "lucide-react";

export default function StarIcon({ fill }) {
    return (
        <Star className={`${fill && 'fill-yellow-400 stroke-yellow-400'}`} />
    )
}