import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { addTranslationServerSideProps } from 'lib/i18nGetStaticProps'
import { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'

export const getServerSideProps: GetServerSideProps = addTranslationServerSideProps(async () => {
  return { props: {} }
})

const SignUpComplete: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: '40px 0px 0px 0px' }}>
      <Typography variant="h2">{t('Signup.complete')}</Typography>
      <Typography>{t('Signup.completeDetail')}</Typography>
    </Box>
  )
}
export default SignUpComplete
