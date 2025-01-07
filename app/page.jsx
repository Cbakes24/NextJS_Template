import Link from "next/link"  
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Cory's NEXTjs Template Applicaiton!
            <br className='lg:hidden' /> 
            <span className='orange_gradient text-center max-md:text-3xl'> Lets Get Started!</span>
        </h1>
        <p className="desc text-center">
            Dont forget to create a google client Id to add tot the .env file
        </p>
        <Link href="/testPage?showDialog=y" className="text-3xl underline">Go to Test Page with Modal</Link>

        <Link href="/testPage" className="text-3xl underline">Go to Test Page without Modal</Link>
    </section>
  )
}

export default Home
