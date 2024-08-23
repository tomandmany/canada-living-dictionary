import StarIcon from "./icons/StarIcon";

type ArticleEvaluationProps = {
    text: string;
    starNum: number;
    isLast?: boolean;
};

export default function ArticleEvaluation({ text, starNum, isLast }: ArticleEvaluationProps) {
    return (
        <div className={`flex gap-2 items-center ${!isLast && 'mb-2'}`}>
            <span className='bg-[#FB8080] text-center w-[70px] py-3 rounded-md text-white text-sm'>{text}</span>
            <div className='flex'>
                {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} fill={index < starNum} />
                ))}
            </div>
        </div>
    );
}
