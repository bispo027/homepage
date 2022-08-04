import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailIgnitePlatform from '../public/images/works/ignitePlataform.png'
import thumbnailEditoMarkdown from '../public/images/works/editoMarkdown.png'
import thumbnailSimpleTodo from '../public/images/works/simpleToDo.png'
import thumbnailFinance from '../public/images/works/financeJG.png'
import thumbnailTweet from '../public/images/works/TweetCLI.png'
import thumbnailTdgo from '../public/images/works/tdgocli.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mt={6} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={3}>
        <Section delay={0.2}>
          <WorkGridItem
            id="tdgo"
            title="Tdgo"
            thumbnail={thumbnailTdgo}>
            TDGO is a to-do list app for terminal
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="tweetcli"
            title="Tweet-CLI"
            thumbnail={thumbnailTweet}>
            Simple terminal application where you can send tweets without accessing the twitter site
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="simpleTodo"
            title="App Simple ToDo List"
            thumbnail={thumbnailSimpleTodo}>
            Simple aplication mobile to ToDo list make in React-Native
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="editorMarkdown"
            title="Editor Markdown"
            thumbnail={thumbnailEditoMarkdown}>
            Simple markdown editor, a basis for a bigger one to come
          </WorkGridItem>
        </Section>
        <Section delay={0.8}>
          <WorkGridItem
            id="eventIgnite"
            title="Event Platform"
            thumbnail={thumbnailIgnitePlatform}>
            Event platform made during Rocketseat&apos;s Ignite Lab week
          </WorkGridItem>
        </Section>
        <Section delay={0.8}>
          <WorkGridItem
            id="financeJG"
            title="Finance JG"
            thumbnail={thumbnailFinance}>
            Simple Application Web about finance controller
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout >
)

export default Works
export { getServerSideProps } from '../components/chakra'
