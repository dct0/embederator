import Layout from '../_layout';

export const HomePage = (props: { messages: string[] }) => {
  return (
    <Layout title="Embederator">
      <h1>Hello Hono!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>;
        })}
      </ul>
    </Layout>
  );
};
