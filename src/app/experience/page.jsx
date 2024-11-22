import Link from 'next/link';
import React from 'react'

export default function Experience() {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    const experienceData = [

        {
            title: 'experience',
            data: [
                {
                    year: ' November 2023 - October 2024',
                    role: '',
                    company: 'Work Sabbatical',
                    type: '',
                    link: ""
                },
                {
                    year: ' January 2023 - October 2023',
                    role: 'Full Stack Engineer',
                    company: 'Sony Music Publishing',
                    type: 'Contract',
                    link: "https://www.sonymusicpub.com/en"
                },
                {
                    year: 'May 2022 - October 2022',
                    role: 'Senior PHP Developer',
                    company: 'Electroneum',
                    type: 'contract',
                    link: "https://electroneum.com"
                },
                {
                    year: 'May 2021 - December 2021',
                    role: 'CMS Engineer',
                    company: 'Zavamed',
                    type: 'Full Time',
                    link: "https://www.zavamed.com/uk/"
                },
                {
                    year: 'March 2021 - April 2021',
                    role: 'PHP Developer',
                    company: 'Endless Wardrobe',
                    type: 'Contract',
                    link: ""
                },
                {
                    year: 'February 2021 - March 2021',
                    role: 'PHP Developer',
                    company: 'Extra Digital Marketing Agency',
                    type: 'Contract',
                    link: "https://www.extradigital.co.uk/"
                },
                {
                    year: 'October 2019 - October 2020',
                    role: 'Lead PHP Developer',
                    company: 'BPL Marketing Agency',
                    type: 'Full Time',
                    link: "https://bplmarketing.com/"
                },
                {
                    year: 'May 2019 - August 2019',
                    role: 'PHP Developer',
                    company: 'Compare The Man & Van',
                    type: 'Contract',
                    link: "https://www.comparethemanandvan.co.uk/"
                },
                {
                    year: 'January 2018 - April 2019',
                    role: 'Digital Drupal Developer',
                    company: 'One Young World',
                    type: 'Full Time',
                    link: "https://www.oneyoungworld.com/"
                },


            ]

        }
    ]


    return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto md:px-10">
        <h2 className="section-title mb-8 xl:mb-20 text-center mx-auto">My Experience</h2>
            <p className="subtitle text-center mx-auto  mb-8 xl:mb-16 "> </p>
                <div className="flex flex-col gap-y-8">
                    {getData(experienceData, 'experience').data.map((item, index) => {
                        const { year, role, company, type, link } = item;
                        return (
                            <div key={index} className="flex gap-x-8 group text-center mx-auto">
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                    <Link href={link} target='_blank'>
                                    <div className="font-semibold text-xl leading-none mb-4 hover:text-primary">{company}</div>
                                    </Link>
                                    <div className="text-base leading-none text-muted-foreground mb-2"> {role}</div>
                                    <div className="text-base font-medium mb-2" > {year}</div>
                                    <div className="text-base font-medium mb-2"> {type}</div>
                                    {/* <Link href={link} className="text-base font-medium mb-2"> {link}</Link> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}
