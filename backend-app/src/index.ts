import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { getPrisma } from '../usefullFun/prismaFun'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/loginUser',async (c) => {
  const prisma = getPrisma(c.env?.DATABASE_URL);
  const body = await c.req.json() as { email: string };
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    });
    if (!user) {
      c.status(403);
      return c.json({
        message: 'user not found',
      });
    }
    return c.json({ message: 'sign-in successfully', });
  } catch (error) {
    c.status(403);
    c.json({ message: 'error while sign-in', });
  }
});
app.post('/api/v1/SignUpUser',async (c) => {
  interface bodyS {
    username: string,
    email: string
  }
  const prisma = getPrisma(c.env?.DATABASE_URL);
  const body = await c.req.json() as bodyS;
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        username: body.username
      }
    });
    return c.json({ message: 'user sign-up successfully', });
  } catch (error) {
    c.status(403);
    c.json({ error: "error while signing up" });
  }
});
app.post('/api/v1/UploadToGit',async (c) => {
  interface bodyS {
    gitRepoName: string,
    gitUserName: string,
    imageUrl:string,
    title : string,
    content :string,
    autherId:string,
  }
  const prisma = getPrisma(c.env?.DATABASE_URL);
  const body = await c.req.json() as bodyS;
  try {
    const user = await prisma.post.create({
      data: {
        title:body.title,
        content:body.content,
        gitHubRepoName:body.gitRepoName,
        gitUserName:body.gitUserName,
        ImageUrl:body.imageUrl,
        authorId:body.autherId
      }
    });
    return c.json({ message: 'post upload successfully', });
  } catch (error) {
    c.status(403);
    c.json({ error: "error while uploading" });
  }
});

export default app
