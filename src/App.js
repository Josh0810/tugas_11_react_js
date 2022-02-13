import {
  List,
  Loader,
  Dimmer,
  Placeholder,
  Segment,
  Image,
  Grid,
  Button,
  Divider,
  Icon,
  Search,
  Header,
} from "semantic-ui-react";

function App() {
  return (
    <div style={{ marginTop: "30px" }}>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="search" />
                Cari Document
              </Header>

              <Search placeholder="Search Document..." />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="file pdf outline" />
                Tambah Document Baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
      <br />
      <Grid columns={3} relaxed>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column width={7}>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column width={3}>
          <List>
            <List.Item content={<h3>Website Terkait</h3>} />
            <List.Item
              icon="linkify"
              content={
                <a target="_blank" rel="noreferrer" href="https://google.com">
                  Google
                </a>
              }
            />
            <List.Item
              icon="linkify"
              content={
                <a target="_blank" rel="noreferrer" href="https://facebook.com">
                  Facebook
                </a>
              }
            />
            <List.Item
              icon="linkify"
              content={
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://react.semantic-ui.com/"
                >
                  Semantic UI
                </a>
              }
            />
            <List.Item
              icon="linkify"
              content={
                <a target="_blank" rel="noreferrer" href="https://niomic.com">
                  Niomic
                </a>
              }
            />
            <List.Item
              icon="linkify"
              content={
                <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
                  React
                </a>
              }
            />
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
