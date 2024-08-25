type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type articles<T='get'> = Structure<
T,
{
  /**
   * カテゴリー名
   */
  category: string
  /**
   * タイトル
   */
  title: string
  /**
   * サムネ写真
   */
  img: { url: string, width: number, height: number }
  /**
   * 本文
   */
  body: any
}>


export interface EndPoints {
  get: {
    'articles': articles<'get'>
  }
  gets: {
    'articles': articles<'gets'>
  }
  post: {
    'articles': articles<'post'>
  }
  put: {
    'articles': articles<'put'>
  }
  patch: {
    'articles': articles<'patch'>
  }
}
