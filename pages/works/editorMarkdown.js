import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="editor-markdown">
    <Container>
      <WorkImage src="/images/works/editoMarkdown.png" alt="editor-markdown" />
      <Title>
        Editor Markdown<Badge>2021</Badge>
      </Title>
      <P>
        A desktop appplication made to be the basis of future projects, a markdown editor and notepad
        as well. The idea is to develop the applicatioon to be used by developers.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/jgbispo/editor-markdown">
            github.com/jgbispo/editor-markedown <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, Linux and MacOs</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
