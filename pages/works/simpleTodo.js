import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Simple ToDo <Badge>2021</Badge>
      </Title>
      <P>
        Mobile application for to-do list annotation made in react, new version will be released soon.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>source</Meta>
          <Link href="https://github.com/jgbispo/simple-todo">
            github.com/jgbispo/simple-todo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
      </List>
    </Container>
  </Layout >
)

export default Work
export { getServerSideProps } from '../../components/chakra'
