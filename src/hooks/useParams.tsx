import {
  useParams as useRouterParams,
  useSearchParams,
} from 'react-router-dom';

type DoctrineRouteParams = {
  bookSlug?: string;
  doctrineSlug?: string;
  codexSlug?: string;
  protocolSlug?: string;
  '*': string | undefined;
};

export type DoctrineView = 'reader' | 'graph' | 'index';

export interface DoctrineQueryParams {
  view: DoctrineView;
  panel?: string;
  highlight?: string;
  sort?: string;
}

const isDoctrineView = (value: string | null): value is DoctrineView =>
  value === 'reader' || value === 'graph' || value === 'index';

const parseSplatPath = (splat?: string) => {
  const [bookSlug, doctrineSlug, codexSlug, protocolSlug] = (splat ?? '')
    .split('/')
    .filter(Boolean);

  return {
    bookSlug,
    doctrineSlug,
    codexSlug,
    protocolSlug,
  };
};

export function useParams() {
  const routeParams = useRouterParams<DoctrineRouteParams>();
  const [searchParams, setSearchParams] = useSearchParams();
  const splatParams = parseSplatPath(routeParams['*']);

  const bookSlug = routeParams.bookSlug ?? splatParams.bookSlug;
  const doctrineSlug = routeParams.doctrineSlug ?? splatParams.doctrineSlug;
  const codexSlug = routeParams.codexSlug ?? splatParams.codexSlug;
  const protocolSlug = routeParams.protocolSlug ?? splatParams.protocolSlug;
  const view = searchParams.get('view');

  const query: DoctrineQueryParams = {
    view: isDoctrineView(view) ? view : 'reader',
    panel: searchParams.get('panel') ?? undefined,
    highlight: searchParams.get('highlight') ?? undefined,
    sort: searchParams.get('sort') ?? undefined,
  };

  const setQuery = (nextQuery: Partial<DoctrineQueryParams>) => {
    const nextSearchParams = new URLSearchParams(searchParams);

    Object.entries(nextQuery).forEach(([key, value]) => {
      if (value === undefined || value === '') {
        nextSearchParams.delete(key);
        return;
      }

      nextSearchParams.set(key, value);
    });

    setSearchParams(nextSearchParams);
  };

  return {
    bookSlug,
    doctrineSlug,
    codexSlug,
    protocolSlug,
    query,
    setQuery,
    hasBook: Boolean(bookSlug),
    hasDoctrine: Boolean(doctrineSlug),
    hasCodex: Boolean(codexSlug),
    hasProtocol: Boolean(protocolSlug),
  };
}
