import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
  Frame,
} from '@neato/guider/client';

export default function LandingPage() {
  return (
    <GuiderLayout meta={{ layout: 'page' }}>
      <Hero>
        <Hero.Title>Wyzie Docs</Hero.Title>
        <Hero.Subtitle>
          Wyzie is an open-sourced toolset for scraping subtitles and anything
          in between.
        </Hero.Subtitle>
        <Hero.Actions>
          <Button to="/subs/introduction">Get Started</Button>
          <Button to="https://wyzie.ru" type="secondary">
            Check it Out
          </Button>
        </Hero.Actions>
      </Hero>
      <Frame plain={true}>
        <CardGrid>
          <Card icon="mdi:alert" title="No Restrictions">
            Wyzie has absolutely no restrictions, you can use it for anything
            you want. However much you want.
          </Card>
          <Card icon="mdi:arm-flex" title="Reliable">
            We pride ourselves on our consistent uptime and (almost) daily
            updates as well as fast caching.
          </Card>
          <Card icon="mdi:beach" title="Simplcity Redefined">
            Easy to implement, easy to use. Wyzie is designed to be as simple as
            possible.
          </Card>
        </CardGrid>
      </Frame>
    </GuiderLayout>
  );
}
