This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This Is Corys NextJs Template!

All the items below still apply. The only things you need to do to get started building the site is to take care of some of the api's. Mainly Google api for auth, the MOngoDB uri, and the NextAuth secrect


Google API:
(https://console.cloud.google.com/)
you can go here and create a new project and put the api and secret into the .env file

MongoDB:
(https://www.mongodb.com/atlas/database)
Gp to this website and create a database and follow the instructions from this video (https://www.youtube.com/watch?v=wm5gMKuwSYk&t=5818s). Ill add them in later.

NextAUth:
You need to create the Next Auth secret using a random SHA 32 bit generator...
type this into the terminal and it should generate one.
openssl rand -base64 32
add that as you NEXTAUTH_SECRET in the .env
https://next-auth.js.org/configuration/options#nextauth_secret

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# NextJS_Template
