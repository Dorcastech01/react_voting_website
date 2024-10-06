import React from 'react'
import { ClockIcon, FingerPrintIcon, UserGroupIcon, WifiIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'Saves Time',
      description:
        "Streamline your voting process and cast your ballot quickly, allowing you to focus on what really matters. Our efficient system ensures you spend less time voting and more time on your priorities.",
      icon: ClockIcon,
    },
    {
      name: 'Enjoy the Convenience',
      description:
        "Vote from anywhere at any time with our user-friendly platform. Whether you're at home, at work, or on the go, our service makes voting simple and accessible.",
      icon: WifiIcon,
    },
    {
      name: 'Avoid Queues',
      description:
        "Say goodbye to long lines and waiting periods. Our online voting system eliminates the need for physical queues, making your voting experience smooth and hassle-free.",
      icon: UserGroupIcon,
    },
    {
      name: 'Easy access for everyone',
      description:
        "Our platform is designed to be inclusive and accessible to all. With easy-to-navigate features and support for various devices, everyone can participate in the voting process without barriers.",
      icon: FingerPrintIcon,
    },
  ]


export default function WhyChooseUs() {

  return (
    <div className="relative isolate overflow-hidden bg-gray-100 mt-24 px-24 py-24 sm:py-28">
       
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-6xl">Why choose us</h2>
          <p className="mt-6 text-lg leading-8 text-center text-gray-700">
                Choosing <span className='text-red-600'>iVote</span> as your voting platform is a smart decision for several compelling reasons. <span className='text-red-600'>iVote </span>
                 simplifies the voting process, making it accessible and user-friendly for everyone, regardless of technical expertise. With <span className='text-red-600'>iVote</span>, you can 
                 easily participate in elections from the comfort of your home, eliminating the need for long commutes and waiting lines. The platform ensures security and transparency, using advanced 
                 encryption to protect your vote and maintain the integrity of the election process. Additionally, <span className='text-red-600'>iVote</span> provides real-time updates and notifications, 
                 keeping you informed and engaged throughout the election cycle. By choosing <span className='text-red-600'>iVote</span>, you are empowering yourself to make a difference in your community and 
                 country with a convenient, secure, and efficient voting experience.
          </p>
        </div>
        <div className="max-w-4xl sm:mt-28 lg:mt-24 lg:max-w-6xl">
        <dl className="grid max-w-5xl grid-cols-1 gap-x-20 gap-y-24 lg:max-w-none lg:grid-cols-2 lg:gap-y-24">
          {features.map((feature) => (
          <div key={feature.name} className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
               <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
          </div>
          ))}
        </dl>
      </div>
      </div>
    </div>
  )
}





