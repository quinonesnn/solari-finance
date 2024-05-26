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
