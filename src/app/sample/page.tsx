import { microcms } from '../../libs/microcms-client'
import { articles } from '../../libs/microcms-types'

export default async function Home() {
    const articles = await microcms.get({
        endpoint: 'articles',
    }).then((res) => res.contents)

    return (
        <main className='grid place-items-center'>
            {articles.map((article: articles) => (
                <div className='prose' key={article.id} dangerouslySetInnerHTML={{ __html: article.body }} />
            ))}
        </main>
    )
}