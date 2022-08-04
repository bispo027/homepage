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
  <Layout title="tweetcli">
    <Container>
      <WorkImage src="/images/works/TweetCLI.png" />
      <Title>
        Tweet CLI <Badge>2022</Badge>
      </Title>
      <P>
        I particularly like to tweet from time to time and I spend a lot of
        time in the linux terminal, so I think it&apos;s faster if I just give the
        command and tweet through the terminal itself
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>source</Meta>
          <Link href="https://github.com/jgbispo/tweet-cli">
            github.com/jgbispo/tweet-cli <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>CLI</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>
    </Container>
  </Layout >
)

export default Work
export { getServerSideProps } from '../../components/chakra'
