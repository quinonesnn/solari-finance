import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import HeroScroll from "@/components/HeroScroll"

const LandingPage = async () => {
  return (
    <div className="">
      <header className="fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 top-2">
          <Link href='/' className='flex cursor-pointer items-center gap-2'>
              <Image
                  src='/icons/logo.svg'
                  alt='Solari Logo'
                  width={34}
                  height={34}
                  className="size-[24px] max-xl:size-14 mr-8"
              />
              <h1 className="sidebar-logo">Solari</h1>
          </Link>
          {/* <nav className="hidden gap-4 md:flex">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav> */}
          <div className="flex items-center gap-4 ">
            <Link href={'/sign-up'}>
              <Button className="form-btn">
                Sign Up
              </Button>
            </Link>
            <Link href={'/sign-in'} className="max-sm:hidden">
              Already Have an Account?
            </Link>
          </div>
        </div>
      </header>
      <HeroScroll/>
      <section id="about" className="">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-orange-400 text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Track your Transactions Quickly and Easily
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stream transaction updates from your bank to your budget.
              Check balances on the go and see upcoming expenses at a glance.
            </p>
          </div>
          <Image
            src="/landing/TransactionHistory.svg"
            alt="About Image"
            width={550}
            height={310}
            quality={100}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
      <section id="features" className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2 order-1 lg:order-2">
            <h2 className="text-orange-400 text-3xl font-bold tracking-tighter md:text-4xl/tight">
              See All Your Financial Accounts in One Place
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Streamline the way you manage your money by seeing all of your financial accounts conveniently in one place.
                No need to switch between different apps to stay on top of your finances.
            </p>
          </div>
          <div className="order-2 lg:order-1">
            <Image
              src="/landing/BankAccounts.svg"
              alt="About Image"
              width={550}
              height={310}
              quality={100}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <section id="about" className="">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-orange-400 text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Transfer Money Seemlessly with other Solari Users
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              In app money transfers between the people you trust and accounts you own. 
            </p>
          </div>
          <Image
            src="/landing/BankTransfer.svg"
            alt="About Image"
            width={550}
            height={310}
            quality={100}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
      <section id="contact" className="container flex h-full flex-col items-center justify-center py-12 md:py-24 lg:py-32">
          <h1 className="mb-5 text-bankGradient text-4xl font-bold tracking-tighter sm:text-md md:text-6xl lg:text-7xl">
              Ready to take control?
          </h1>
          <Link href={'/sign-up'}>
            <Button className="form-btn">Get Started</Button>
          </Link>
      </section>
    </div>
  )
}

export default LandingPage

