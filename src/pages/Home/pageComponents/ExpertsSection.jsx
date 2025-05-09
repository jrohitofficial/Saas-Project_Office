import React from 'react';

const ExpertsSection = () => {
  const experts = [
    {
      id: 1,
      name: 'Sabal Kafle',
      position: 'Founder',
      image: '/images/img_mask_group.png',
      socialIcon: '/images/img_group_1171276030.svg'
    },
    {
      id: 2,
      name: 'Sabal Kafle',
      position: 'Founder',
      image: '/images/img_mask_group.png',
      socialIcon: '/images/img_group_1171276030.svg'
    },
    {
      id: 3,
      name: 'Reeshav Manandhar',
      position: 'Co-Founder',
      image: '/images/img_mask_group.png',
      socialIcon: '/images/img_group_1171276030.svg'
    },
    {
      id: 4,
      name: 'Reeshav Manandhar',
      position: 'Co-Founder',
      image: '/images/img_mask_group.png',
      socialIcon: '/images/img_group_1171276030.svg'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Case Study</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
          Meet Our Experts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert) => (
            <div key={expert.id} className="relative">
              <img src={expert.image} alt={expert.name} className="w-full h-auto rounded-md" />
              <div className="mt-4">
                <h3 className="text-lg font-extrabold text-blue-800">{expert.name}</h3>
                <p className="text-base font-semibold text-blue-500">{expert.position}</p>
              </div>
              <div className="absolute bottom-16 right-0">
                <img src={expert.socialIcon} alt="Social" className="w-[42px] h-[42px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;