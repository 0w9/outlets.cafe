import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'The best list of cafes to cowork in.',
  description: 'A big and curated list of cafes that have outlets, wifi and even more coworking perks.',
}

const supportedCities = [
  {
    "name": "San Francisco",
    "slug": "sf"
  }
]

interface SupportedCity {
  name: string,
  slug: string
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-white text-center space-y-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-black">outlets.cafe</h1>
          <p className="text-lg text-gray-800">A curated list of cafes with outlets for coworking.</p>
          <div className="mt-4 mb-4">
            <a href="mailto:lennard@beachcode.de?subject=New%20cafe%20for%20outlets.cafe&body=Hi!%0A%0AThis%20is%20the%20cafe%20on%20Google%20Maps%3A%0A%0ADoes%20it%20have%20outlets%3F%20%5BX%5D%0ADoes%20it%20have%20wifi%3F%20%5BX%5D" className="button bg-green-600 border-2 border-solid border-green-700 hover:bg-green-800 hover:border-green-900 px-6 py-3 text-white rounded-md">Submit Cafe (with outlet)</a>
          </div>
        </div>

        <div className='h-40'></div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-black">Explore Cafes by City:</h1>
          <p className="text-lg text-gray-800">Discover cafes in major cities.</p>

          <ul className="space-y-2">
            {supportedCities.map((city: SupportedCity) => (
              <li key={city.slug} className="text-lg text-gray-800">
                <a href={`/${city.slug}`} className='underline text-black'>{city.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
