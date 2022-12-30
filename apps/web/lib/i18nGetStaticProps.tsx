import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, PreviewData } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ParsedUrlQuery } from 'querystring'

export const addTranslationStaticProps: (callback: GetStaticProps) => GetStaticProps =
  (callback: GetStaticProps) => async (ctx: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {
    const translationProps = await serverSideTranslations(ctx.locale || 'en', ['common'])
    const props = await callback(ctx)
    return { ...props, ...{ props: translationProps } }
  }

export const addTranslationServerSideProps: (callback: GetServerSideProps) => GetServerSideProps =
  (callback: GetServerSideProps) => async (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    const translationProps = await serverSideTranslations(ctx.locale || 'en', ['common'])
    const props = await callback(ctx)
    return { ...props, ...{ props: translationProps } }
  }
