import Link from "@/components/link"
import Image from "next/image"
import { Routes } from "../constants/enums"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRightCircle } from "lucide-react"

const Hero = () => {
  return (
    <section className='section-gap'>
        <div className='container grid grid-cols-1 md:grid-cols-2'>
            <div className='md:py-12 flex items-start gap-3 flex-col'>
                <h1 className='lg:text-2xl'>Slice into Happiness</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, velit ipsam. Minus inventore nostrum ducimus incidunt. Non voluptatibus rem architecto vel sed ut debitis, veniam, molestiae accusamus delectus consequuntur modi?
                </p>
                <div className='flex items-center gap-3'>
                    <Link
                        href={`/${Routes.MENU}`}
                        className={`${buttonVariants({
                            size: 'lg'
                        })} !rounded-full`}
                    >
                        Order Now
                        <ArrowRightCircle
                            className={`!w-5 !h-5`}
                        />
                    </Link>
                    <Link
                        href={`/${Routes.ABOUT}`}
                        className={`flex gap-2 items-center text-black hover:text-primary duration-200`}
                    >
                        Learn More
                        <ArrowRightCircle
                            className={`!w-5 !h-5`}
                        />
                    </Link>
                </div>
            </div>
            <div className="relative hidden md:block">
                <Image className='object-contain' src='/assets/images/pizza.png' alt='Pizza' fill loading="eager" priority />
            </div>
        </div>
    </section>
  )
}

export default Hero