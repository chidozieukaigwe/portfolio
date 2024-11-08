import Image from 'next/image'

export default function DevImg({containerStyles, imgsrc}) {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgsrc} fill priority alt="Chido Ukaigwe's Developer Image" />
    </div>
  )
}
