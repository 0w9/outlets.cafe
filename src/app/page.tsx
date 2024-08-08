import type { Metadata } from 'next'
import Image from 'next/image';
 
export const metadata: Metadata = {
  title: 'The best list of cafes to cowork in.',
  description: 'A big and curated list of cafes that have outlets, wifi and even more coworking perks.',
}

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-white text-center space-y-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-black">outlets.cafe</h1>
          <p className="text-lg text-gray-800">A list of cafes with outlets.</p>
          <div className="mt-4 mb-4">
            <a href="mailto:lennard@beachcode.de?subject=New%20cafe%20for%20outlets.cafe&body=Hi!%0A%0AThis%20is%20the%20cafe%20on%20Google%20Maps%3A%0A%0ADoes%20it%20have%20outlets%3F%20%5BX%5D%0ADoes%20it%20have%20wifi%3F%20%5BX%5D" className="button bg-green-600 border-2 border-solid border-green-700 hover:bg-green-800 hover:border-green-900 px-6 py-3 text-white rounded-md">Submit Cafe (with outlet)</a>
          </div>
        </div>

        <video src={"https://outlets.cafe/cafe.mp4"} autoPlay muted className='p-12' />
      </div>
    </div>
  );
}
