import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

/*
import dynamic from 'next/dynamic'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})
*/
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="João Gustavo homepage" />
        <meta name="author" content="Takuya Matsuyama" />
        <meta name="author" content="craftzdog" />
        <meta name="author" content="João Gustavo" />
        <meta name="author" content="Bishop" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>João Gustavo - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>)
}
export default Main
