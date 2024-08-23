import { Star } from "lucide-react";

type StarIconProps = {
    fill?: boolean;
}

export default function StarIcon({ fill }: StarIconProps) {
    return (
        <Star className={`${fill && 'fill-yellow-400 stroke-yellow-400'}`} />
    )
}