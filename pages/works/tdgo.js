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
  <Layout title="Tdgo CLI">
    <Container>
      <WorkImage src="/images/works/tdgocli.png" />
      <Title>
        Tdgo CLI <Badge>2022</Badge>
      </Title>
      <P>
        With the objective of being a simple and useful application,
        Tdgo comes to solve a personal problem, as I spend many hours
        of my day in front of a terminal it is much faster for me to
        register a task and organize myself using it, hence the Tdgo
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>source</Meta>
          <Link href="https://github.com/jgbispo/tdgo/tree/master">
            github.com/jgbispo/tdgo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>CLI (Terminal)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Go Lang</span>
        </ListItem>
      </List>
    </Container>
  </Layout >
)

export default Work
export { getServerSideProps } from '../../components/chakra'
