import { ArrowRight } from "lucide-react";
import ArticleCard from "../../components/ArticleCard";
import ArticleEvaluation from "../../components/ArticleEvaluation";
import { HeadingSecond } from "../../components/Heading";
import Link from "next/link";
import React from "react";

type RecommendArticlesProps = {
    heading: string,
    children: React.ReactNode,
};

export type ArticleCardType = {
    id: string,
    url: string,
    title: string,
    date: string,
}

export type ArticleEvaluationType = {
    articleCardId: string,
    name: string,
}

const articleCards: ArticleCardType[] = [
    {
        id: '1',
        url: '/',
        title: 'ダララマで安い7選',
        date: '2024/07/15',
    },
    {
        id: '2',
        url: '/',
        title: 'カナダのごみ分別',
        date: '2024/07/15',
    }
]

const articleEvaluations: ArticleEvaluationType[] = [
    { articleCardId: '1', name: '節約' },
    { articleCardId: '1', name: '交通の便' },
    { articleCardId: '2', name: '節約' },
    { articleCardId: '2', name: 'カナダ愛' },
]

export default function RecommendArticles({ heading, children }: RecommendArticlesProps) {
    // childrenに<br/>が含まれているかチェックする関数
    const containsBreakLine = (children: React.ReactNode): boolean => {
        let hasBreakLine = false;

        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child) && child.type === 'br') {
                hasBreakLine = true;
            }
        });

        return hasBreakLine;
    };

    // 分岐処理
    const renderText = () => {
        if (containsBreakLine(children)) {
            return <p className='mt-2 mb-4 text-center'>{children}</p>;
        } else {
            return <p className='my-6 text-center'>{children}</p>;
        }
    };

    return (
        <section className='flex flex-col items-center'>
            <HeadingSecond>{heading}</HeadingSecond>
            {renderText()}
            <div className='flex flex-wrap justify-center gap-4'>
                {
                    articleCards.map((articleCard, index) => {
                        const filteredArticleEvaluations = articleEvaluations.filter((articleEvaluation) => articleEvaluation.articleCardId === articleCard.id);
                        return (
                            <ArticleCard key={index} articleCard={articleCard}>
                                {
                                    articleEvaluations
                                        .filter((articleEvaluation) => articleEvaluation.articleCardId === articleCard.id)
                                        .map((articleEvaluation, index) => (
                                            <ArticleEvaluation key={index} articleEvaluation={articleEvaluation} isLast={index === filteredArticleEvaluations.length - 1} />
                                        ))
                                }
                            </ArticleCard>
                        )
                    })
                }
            </div>
            <Link href={'/'} className='flex ml-auto items-center mt-2 border border-[#9EC2FF] bg-[#9EC2FF] hover:bg-white hover:text-black rounded-full px-8 py-4 text-white transition group'>
                More
                <ArrowRight className="ml-2 group-hover:text-black group-hover:translate-x-2" />
            </Link>
        </section>
    );
}