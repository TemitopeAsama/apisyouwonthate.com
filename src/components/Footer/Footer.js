import {
  Box,
  Grid,
  GridItem,
  Stack,
  Text,
  Heading,
  Container,
  useTheme,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

import { GitHubIcon, RssIcon, TwitterIcon } from '../icons';
import { NewsletterForm } from '../NewsletterForm';

import poweredByVercel from '../../../public/img/powered-by-vercel.svg';
import logo from '../../../public/img/apis-you-wont-hate-light.png';

const Subtitle = ({ children }) => (
  <Text
    textTransform={'uppercase'}
    fontWeight={'bold'}
    textAlign={['center', 'left', 'left']}
  >
    {children}
  </Text>
);

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      as="footer"
      margin="6rem 0 0 0"
      padding="2rem 2rem 0"
      borderTop={`20px solid ${theme.colors.green[400]}`}
      background={theme.colors.green[50]}
      overflow="hidden"
    >
      <Container centerContent="true" padding="1rem 2rem" overflow="hidden">
        <Heading as="h2" size="xl" textAlign="center" marginBottom={2}>
          Want to get updates on what we&apos;re building at APIs You Won&apos;t
          Hate?
        </Heading>
        <Heading as="h3" size="md">
          Subscribe to our newsletter
        </Heading>
        <Stack marginTop={4}>
          <NewsletterForm />
        </Stack>
      </Container>

      <Grid
        templateColumns="repeat(auto-fit, minmax(180px, 1fr))"
        gap={6}
        padding="2rem"
      >
        <GridItem colSpan={[1, 2, 3]}>
          <Stack textAlign={['center', 'center', 'left']}>
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  alt="APIs You Won't Hate"
                  width="130px"
                  height="60px"
                />
              </a>
            </Link>
            <Text
              textAlign={['center', 'center', 'left']}
              fontWeight="semibold"
            >
              APIs You Wont Hate is the recommended manual for building well
              designed and well crafted APIs. Join us, read our blog posts,
              search our community of knowledge and put it to good use building
              robust APIs
            </Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={1}>
          <Subtitle>Resources</Subtitle>
          <Stack
            textAlign={['center', 'left', 'left']}
            shouldWrapChildren={true}
          >
            <Link href="/books">
              <a mt="1rem">Books</a>
            </Link>

            <Link href="/blog">
              <a>Blog</a>
            </Link>

            <Link href="/videos">
              <a>Videos</a>
            </Link>

            <Link href="/podcast">
              <a>Podcast</a>
            </Link>

            <Link href="/ama">
              <a>Ask us a question</a>
            </Link>
          </Stack>
        </GridItem>
        <GridItem colSpan={1}>
          <Stack textAlign={['center', 'left', 'left']}>
            <Subtitle>Community</Subtitle>
            <Link href="/community">Join our Community</Link>
            <Link href="/about">About Us</Link>
            <Link href="/about">Authors</Link>
            <Link href="/conduct">Code of Conduct</Link>
          </Stack>
        </GridItem>
        <GridItem colSpan={1}>
          <Stack textAlign={['center', 'left', 'left']}>
            <Subtitle>More help</Subtitle>
            <a href="https://calendly.com/philsturgeon">
              API Design Consulting
            </a>
          </Stack>
        </GridItem>
        <GridItem colSpan={1}>
          <Stack textAlign={['center', 'left', 'left']}>
            <Subtitle>Online</Subtitle>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={['center', 'start', 'start']}
            >
              <GitHubIcon />{' '}
              <a
                href="https://github.com/apisyouwonthate"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={['center', 'start', 'start']}
            >
              <Stack ml={['-20px', 0, 0]}>
                <RssIcon />
              </Stack>

              <a href="/rss.xml" target="_blank" rel="noreferrer noopener me">
                RSS
              </a>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={['center', 'start', 'start']}
            >
              <TwitterIcon />
              <a
                href="https://twitter.com/apisyouwonthate"
                target="_blank"
                rel="noreferrer noopener me"
              >
                Twitter
              </a>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>

      <Stack
        direction={['column', 'column', 'row']}
        justifyContent={['center', 'center', 'space-between']}
        alignItems="center"
        padding="1rem 2rem"
        borderTop={`1px solid ${theme.colors.green[400]}`}
      >
        <p>
          <a
            href="https://vercel.com?utm_source=apis-you-wont-hate&utm_campaign=oss"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image alt="Powered by Vercel" src={poweredByVercel} />
          </a>
        </p>
        <Text as="small">
          {`© ${new Date().getFullYear()} APIs You Won't Hate. All rights reserved.`}
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
