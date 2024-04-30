import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  console.log('hello world');
  return c.json({ message: 'Hi there' });
});

export default app;
