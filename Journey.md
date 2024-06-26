Journey to create Solari Finance


# Setup
1. Initialize using with Next.js and Shadcn https://ui.shadcn.com/docs/installation/next

2. Modified tailwind.config.ts
   1. add the colors that were picked from the figma design
   2. You can click on the specifc components and drill into layer and you can see the color in the properties 
3. types/index.d.ts
   1. includes the typescript types and parameters
4. public/icons
   1. Has all the svg icons that will be used
5. lib/utils.ts
   1. Has utiltiy functions that will be used throughout the app
6. constants
   1. sidebarlinks
   2. mock data
7. app/globals.css
   1. additional specialized styles we can't do with tailwind

8. Difference between layout and pages.
   1. Sidebar is a layout because it is shared
   2. pages are singular

9. Route Groups
   1.  Next.js
   2.  You can mark a folder as a route group
   3. You can make a group by wrapping a folder name in ()
   4. (root)

10. Total Balance box
    1.  using new packages, query-string
    2.  using react-countup
        1.  upon import this package gave a useRef error
            1.  external packages will use client side functionalities 
            2.  we create a new component that is client side
            3.  AnimatedCounter
                1.  this has the 'use client' at the top
    3. DoughnutChart
        1. chart.js
        2.  https://www.chartjs.org/
        3.  framework integration with react https://react-chartjs-2.js.org/ 
        4.  this will also be a client side so add "use client"
11. Sidebar
    1. get path name using usePathname from next/navigation
       1. https://nextjs.org/docs/app/api-reference/functions/use-pathname
    2. Add image/Next
       1. https://nextjs.org/docs/app/api-reference/components/image
       2. The Image Component requires the following properties: src, width, height, and alt
    3. Map through constants/index.ts/sidebarLinks array
       1. create an isActive state variable to change styling on click
12. MobileNav
     1.  Shadcn Sheet Component
         1.  https://ui.shadcn.com/docs/components/sheet
         2.  Modify the sidebar content to fit inside the sheet content
13. RightSidebar
     1.  The rightSidebar is only used in the home page according to my Figma file
      2.  I use and aside tag since this oßnly populates on larger screens
          1.  added hidden and noscroll bar
14. BankCard
    1.  copied configurations from figma
15. SignIn / SignUp
    1.  pages are server side and the component will be client side
    2.  Shared AuthForm component
    3.  Shadcn Forms
        1.  https://ui.shadcn.com/docs/components/form
        2.  react-hook-form
        3.  zod for form validation
    4.  Auth form schema using zod validation
        1.  schema in lib/utils.ts/authFormSchema
        2.  accepts type of sign in or sign up
    5.  handle on submit
        1.  use useRouter from next/navigation
    6.  Create new folder for server actions
        1.  lib/actions/user.action.ts
        2.  "use server"
16. Appwrite
    1.  Created new project
    2.  modeled .env as seen in .env.example
    3.  Added project ID and API SECRET
    4.  create database, 3 collections, users, banks, transactions.
    5.  SSR w Next.js
        1.  https://appwrite.io/docs/tutorials/nextjs-ssr-auth/step-1
        2.  Initialize SDK
            1.  Create a function to build services you need in a file like src/lib/server/appwrite.js and exporting the instances
            2. Creates Session Client and Admin Client
         3. Get Logged in User
            1. Build a utility function to get the logged in user from Appwrite. This function will be used in our components and routes to check if a user is logged in, and access the user's details.
            2. since its a user action we can add it to lib/actions/user.action.ts
         4. Sign up
            1. When the form is submitted, we want to send the email and password to Appwrite to authenticate the user.
17. Sentry Session Replay
    1.  Sentry.io
    2.  npx @sentry/wizard@latest -i nextjs
    3.  using Sentry SaaS (sentry.io)
    4.  No to ad blockers
    5.  Yes to example page and yes to using CI/CD to deploy (Vercel)
    6.  created 3 files
        1.  sentry.server
        2.  sentry.edge
        3.  sentry.client
18. createBankAccount in lib/user/actions
    1.  this is strictly for appwrite
    2.  destructure from process.env
    3.  Move user from session to being user in appwrite
    4.  schema for bankAccount in appwrite
        1.  accountId, bankId, accessToken, fundingSourceUrl, shareableId,
        2.  usersId is a relationship, banks to users many to one
19. Plaid API
    1. https://plaid.com/docs/quickstart/
    2. https://dashboard.plaid.com/overview
    3. go to developers/keys
       1. Copy client_id to .env PLAID_CLIENT_ID
       2. for to begin copy the sandbox api secret to PLAID_SECRET
       3. PLAID_ENV=sandbox
          PLAID_PRODUCTS=auth,transactions,identity
          PLAID_COUNTRY_CODES=US,CA
    4. https://plaid.com/docs/link/web/
       1. npm install plaid
       2. npm install react-plaid-link
       3. create lib/plaid.ts for plaidClient
    5. components/PlaidLink.tsx
       1. use plaidClient to make createLinkToken in user.actions
       2. exchangePublicToken
          1. Create a link token
          2. pass generated link token to Plaid Link
          3. Trigger flow of connecting bank account to application through Plaid Link
          4. on Success, plaid link will provide temp public token
          5. exchange public token with permanent access token
          6. exchange access token to get bank account information
          7. connect with processor (dwolla)
20. Dwolla API
     1.  npm install dwolla-v2
     2.  Used integration example from Dwolla Github
         1.  https://github.com/Dwolla/integration-examples/blob/9f29f77655bf0e7231a8b8e5e7486a551d77d7b3/packages/plaid-funding-source/app/dwolla.ts
     3.  Added Transfering Between Users (Step5: Initiating a transfer)
         1.  https://developers.dwolla.com/docs/balance/transfer-money-between-users/create-transfer
21. Making SignUp Atmoic
    1.  Account creation has to add them to DB and connect to Plaid and Dwolla