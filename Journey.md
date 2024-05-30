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