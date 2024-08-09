import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { location: string }
}

interface Cafe {
  added: string,
  name: string,
  address: string,
  website: string,
  wifi: boolean,
  outlet: boolean
}

const fullNames = {
  "sf": "San Francisco"
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {


  const location = params.location;
  return {
    title: `Cafes with outlets in ${fullNames[location as keyof typeof fullNames]}`,
    description: `A big and curated list of cafes in ${fullNames[location as keyof typeof fullNames]} for coworking. Find cafes with outlets, WiFi and everything you need for a productive coworking session.`,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export default async function LocationCafesPage({ params }: Props) {
  const cafes = await fetch(`https://outlets.cafe/api/getCafes?location=${params.location}`).then((res) => res.json());

  return (
    <div className='p-12'>
      <h1 className="text-4xl font-bold text-black mb-4">Cafes in {fullNames[params.location as keyof typeof fullNames]}</h1>
      <p className="text-lg text-gray-800 mb-8">Explore the best cafes in {params.location} for coworking.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-800 bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Website
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                WiFi
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 divide-y divide-gray-200">
            {cafes.map((cafe: Cafe) => (
              <tr key={cafe.name} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-800">{cafe.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-800">{cafe.address}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={cafe.website} target="_blank" rel="noopener noreferrer" className='underline text-blue-500 hover:text-blue-700'>
                    Visit Website
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-bold rounded-full ${cafe.wifi ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {cafe.wifi ? 'Yes' : 'No'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
