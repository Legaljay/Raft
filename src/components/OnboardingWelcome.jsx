/* eslint-disable react/prop-types */

export default function OnboardingWelcome({title,text, className, style}) {
  return (
    <div className={className|| "my-[50px] md:my-[100px] flex flex-col justify-center items-center"}>
        <p className='font-[510] text-[24px] md:text-[72px] text-[#fff] leading-normal mt-3 mb-3'>{title}</p>
        <span className={`${style} text-[rgb(82,83,82)] text-[16px] md:text-[32px] font-normal leading-normal`}>{text}</span>
    </div>
  )
}
