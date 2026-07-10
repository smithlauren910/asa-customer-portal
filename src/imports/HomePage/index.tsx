import svgPaths from "./svg-9kdzhws294";
import imgASaLogoWhite from "./d6c973a49b3a11fd6b1f8226d69743e93a3fd1d8.png";

function Frame() {
  return (
    <div className="relative shrink-0 w-[68px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[53px] relative shrink-0 w-[96px]" data-name="aSa Logo White">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[321.1%]" src={imgASaLogoWhite} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return <div className="h-[24px] relative shrink-0 w-[122.07px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="bg-[#095c53] h-[31px] relative rounded-[16px] shrink-0 w-[32px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">JD</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c3efea0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="1.66667" />
          <path d={svgPaths.p25877f40} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Question() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Question">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Question">
          <path d={svgPaths.p1009be80} fill="var(--fill-0, white)" fillOpacity="0.85" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-end relative size-full">
        <Container2 />
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-pre">{`John Doe   |   Location`}</p>
        <Icon />
        <Icon1 />
        <Question />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[56.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] left-[19px] not-italic text-[#095c53] text-[14px] top-0 whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[180px]" data-name="Container">
      <div aria-hidden className="absolute border-[#095c53] border-l-3 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text />
        <Container4 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black top-[0.5px] whitespace-nowrap">Loads / Shipments</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[19px] relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[61.539px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-[19px] not-italic text-[#1a1a1a] text-[14px] top-0 whitespace-nowrap">Orders</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[180px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-3 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text2 />
        <Container6 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[70.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-[19px] not-italic text-[#1a1a1a] text-[14px] top-0 whitespace-nowrap">Invoices</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[180px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-3 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text3 />
        <Container7 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[71.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-[19px] not-italic text-[#1a1a1a] text-[14px] top-0 whitespace-nowrap">Account</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[180px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-3 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text4 />
        <Container8 />
      </div>
    </div>
  );
}

function SideNav() {
  return (
    <div className="bg-[#f0f0f0] h-[200px] relative shrink-0 w-[180px]" data-name="SideNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button />
        <Container5 />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[43px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-nowrap">Overview</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[24px] relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[118.242px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] top-0 whitespace-nowrap">Upcoming Schedule</p>
    </div>
  );
}

function Text6() {
  return <div className="absolute h-[16.5px] left-[130.24px] top-[2.5px] w-[118.992px]" data-name="Text" />;
}

function Container13() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1924)" id="Icon">
          <path d={svgPaths.p1d11280} id="Vector" stroke="var(--stroke-0, #C62828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M6.5 4.33333V6.5" id="Vector_2" stroke="var(--stroke-0, #C62828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M6.5 8.66667H6.50542" id="Vector_3" stroke="var(--stroke-0, #C62828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_1_1924">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[115.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#c62828] text-[11px] top-[0.5px] tracking-[1.1px] uppercase whitespace-nowrap">Action Required</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon2 />
        <Text7 />
      </div>
    </div>
  );
}

function PlaceholderForOrderCard() {
  return <div className="h-[95px] relative shrink-0 w-[1150px]" data-name="Placeholder for OrderCard" />;
}

function Container18() {
  return (
    <div className="absolute bg-[#fdecea] content-stretch flex flex-col items-start left-0 pl-[22px] pr-[16px] py-[8px] top-[-1px] w-[895px]" data-name="Container">
      <div aria-hidden className="absolute border-[#c62828] border-l-6 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#c62828] text-[12px] whitespace-nowrap">Revised structural drawings required before release. Please upload updated sheet S-104 from your engineer of record.</p>
    </div>
  );
}

function ContainerNegativeMargin() {
  return (
    <div className="h-[33px] relative shrink-0 w-[1150px]" data-name="Container (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#c62828] h-[28px] relative shrink-0 w-[94.852px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[16.5px] left-[8px] not-italic text-[11px] text-white top-[7px] whitespace-nowrap">Action Required</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[74.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#9e9e9e] text-[12px] top-[-0.5px] whitespace-nowrap">PGH26-0312</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[2px] relative size-full">
        <Container20 />
        <Text8 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-[808px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Rt. 30 Bridge Rehab — Foundation Rebar</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1086px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#9e9e9e] text-[12px] whitespace-nowrap">Fabricated Rebar · 340 items · aSa Steel Fabricators, Murrysville PA</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[1086px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #D0D0D0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[827px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[95px] left-0 top-0 w-[895px]" data-name="Container">
      <div aria-hidden className="absolute border-[#c62828] border-l-6 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OrderCard() {
  return (
    <div className="absolute bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] h-[95px] left-0 top-0 w-[895px]" data-name="OrderCard">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[22px] pr-[17px] py-[13px] relative size-full">
        <Container19 />
        <Container21 />
        <Container24 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <PlaceholderForOrderCard />
        <ContainerNegativeMargin />
        <OrderCard />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#fdecea] left-0 top-[94px] w-[895px]" data-name="Container">
      <div aria-hidden className="absolute border-[#c62828] border-l-6 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[22px] pr-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#c62828] text-[12px] whitespace-nowrap">Pour schedule moved up. Confirm revised delivery window by Jun 12 or order will be rescheduled.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#c62828] h-[28px] relative shrink-0 w-[94.852px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[16.5px] left-[8px] not-italic text-[11px] text-white top-[7px] whitespace-nowrap">Action Required</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[74.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#9e9e9e] text-[12px] top-[-0.5px] whitespace-nowrap">PGH26-0318</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[820px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[2px] relative size-full">
        <Container28 />
        <Text9 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Westmoreland Mall Garage — Level 2 Mesh</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1086px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#9e9e9e] text-[12px] whitespace-nowrap">Welded Wire Mesh · 80 items · aSa Steel Fabricators, Murrysville PA</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-[879px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #D0D0D0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function OrderCard1() {
  return (
    <div className="absolute bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] h-[95px] left-0 top-0 w-[895px]" data-name="OrderCard">
      <div aria-hidden className="absolute border-[#c62828] border-l-6 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[28px] pr-[16px] py-[12px] relative size-full">
        <Container27 />
        <Container29 />
      </div>
    </div>
  );
}

function PlaceholderForOrderCard1() {
  return (
    <div className="h-[95px] relative shrink-0 w-[889px]" data-name="Placeholder for OrderCard">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-[789px]" data-name="Container">
      <div aria-hidden className="absolute border-[#c62828] border-l-6 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[6px] relative size-full">
        <Container26 />
        <OrderCard1 />
        <PlaceholderForOrderCard1 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[266px] relative shrink-0 w-[1150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pt-[8px] relative size-full">
        <Container17 />
        <Container25 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[299px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[59.75px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] top-0 whitespace-nowrap">Tue, Jun 9</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[16.5px] left-[1114.95px] top-[2.5px] w-[35.055px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#9e9e9e] text-[11px] top-[0.5px] whitespace-nowrap">1 order</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text10 />
        <Text11 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#2d6cb8] h-[28px] relative shrink-0 w-[60.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[16.5px] left-[8px] not-italic text-[11px] text-white top-[7px] whitespace-nowrap">In Transit</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[74.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#9e9e9e] text-[12px] top-[-0.5px] whitespace-nowrap">PGH26-0313</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_1912)" id="Icon">
          <path d={svgPaths.p225f5e00} id="Vector" stroke="var(--stroke-0, #9E9E9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p9062d00} id="Vector_2" stroke="var(--stroke-0, #9E9E9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_1_1912">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[17px] relative shrink-0 w-[65px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[4px] relative size-full">
        <Icon5 />
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#9e9e9e] text-[11px] whitespace-nowrap">{` On truck`}</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[2px] relative size-full">
        <Container36 />
        <Text12 />
        <Text13 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[782px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Rt. 30 Bridge Rehab — Pier Cap Stirrups</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1086px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#9e9e9e] text-[12px] whitespace-nowrap">{`Stirrups & Ties · 112 items · aSa Steel Fabricators, Murrysville PA`}</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-[1086px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #D0D0D0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[95px] left-0 top-0 w-[895px]" data-name="Container">
      <div aria-hidden className="absolute border-[#2d6cb8] border-l-6 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OrderCard2() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] h-[95px] relative shrink-0 w-[895px]" data-name="OrderCard">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[22px] pr-[17px] py-[13px] relative size-full">
        <Container35 />
        <Container37 />
        <Container40 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[103px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <OrderCard2 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[146.5px] relative shrink-0 w-[1150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[69.383px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] top-0 whitespace-nowrap">Sun, Jun 14</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[16.5px] left-[1114.95px] top-[2.5px] w-[35.055px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#9e9e9e] text-[11px] top-[0.5px] whitespace-nowrap">1 order</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text14 />
        <Text15 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#0d7a6e] h-[28px] relative shrink-0 w-[67.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[16.5px] left-[8px] not-italic text-[11px] text-white top-[7px] whitespace-nowrap">Confirmed</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[74.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#9e9e9e] text-[12px] top-[-0.5px] whitespace-nowrap">PGH26-0319</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[2px] relative size-full">
        <Container45 />
        <Text16 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Westmoreland Mall Garage — Column Cages</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1086px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#9e9e9e] text-[12px] whitespace-nowrap">Fabricated Rebar · 48 items · aSa Steel Fabricators, Murrysville PA</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #D0D0D0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[95px] left-0 top-[0.5px] w-[895px]" data-name="Container">
      <div aria-hidden className="absolute border-[#0d7a6e] border-l-6 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OrderCard3() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] h-[95px] relative shrink-0 w-[895px]" data-name="OrderCard">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[22px] pr-[17px] py-[13px] relative size-full">
        <Container44 />
        <Container46 />
        <Container49 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[103px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <OrderCard3 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[142.5px] relative shrink-0 w-[1150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[72.492px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] top-0 whitespace-nowrap">Wed, Jun 17</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[16.5px] left-[1114.95px] top-[2.5px] w-[35.055px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#9e9e9e] text-[11px] top-[0.5px] whitespace-nowrap">1 order</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text17 />
        <Text18 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#fe9a00] h-[28px] relative shrink-0 w-[56.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[16.5px] left-[8px] not-italic text-[11px] text-white top-[7px] whitespace-nowrap">Pending</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[18px] relative shrink-0 w-[74.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#9e9e9e] text-[12px] top-[-0.5px] whitespace-nowrap">PGH26-0324</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[2px] relative size-full">
        <Container54 />
        <Text19 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Mon Valley Expressway Ph.2 — Retaining Wall Bar</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1086px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#9e9e9e] text-[12px] whitespace-nowrap">Straight Bar Stock · 620 items · aSa Steel Fabricators, Murrysville PA</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-[820px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #D0D0D0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[95px] left-0 top-0 w-[853px]" data-name="Container">
      <div aria-hidden className="absolute border-[#fe9a00] border-l-6 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OrderCard4() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] h-[95px] relative shrink-0 w-[895px]" data-name="OrderCard">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[22px] pr-[17px] py-[13px] relative size-full">
        <Container53 />
        <Container55 />
        <Container58 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[103px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <OrderCard4 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[142.5px] relative shrink-0 w-[1150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[72.516px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] top-0 whitespace-nowrap">Mon, Jun 22</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[16.5px] left-[1114.95px] top-[2.5px] w-[35.055px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#9e9e9e] text-[11px] top-[0.5px] whitespace-nowrap">1 order</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#0d7a6e] h-[28px] relative shrink-0 w-[67.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[16.5px] left-[8px] not-italic text-[11px] text-white top-[7px] whitespace-nowrap">Confirmed</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[18px] relative shrink-0 w-[74.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#9e9e9e] text-[12px] top-[-0.5px] whitespace-nowrap">PGH26-0329</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[2px] relative size-full">
        <Container63 />
        <Text22 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[847px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">Allegheny County Jail Annex — Slab Reinforcement</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1086px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#9e9e9e] text-[12px] whitespace-nowrap">Welded Wire Mesh · 150 items · aSa Steel Fabricators, Murrysville PA</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-[1086px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #D0D0D0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[95px] left-0 top-[0.5px] w-[841px]" data-name="Container">
      <div aria-hidden className="absolute border-[#0d7a6e] border-l-6 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OrderCard5() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] h-[95px] relative shrink-0 w-[895px]" data-name="OrderCard">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[22px] pr-[17px] py-[13px] relative size-full">
        <Container62 />
        <Container64 />
        <Container67 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[103px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <OrderCard5 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[142.5px] relative shrink-0 w-[1150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[66.008px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] top-0 whitespace-nowrap">Sat, Jun 27</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[16.5px] left-[1114.95px] top-[2.5px] w-[35.055px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#9e9e9e] text-[11px] top-[0.5px] whitespace-nowrap">1 order</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text23 />
        <Text24 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#0d7a6e] h-[28px] relative shrink-0 w-[67.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[16.5px] left-[8px] not-italic text-[11px] text-white top-[7px] whitespace-nowrap">Confirmed</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[18px] relative shrink-0 w-[74.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#9e9e9e] text-[12px] top-[-0.5px] whitespace-nowrap">PGH26-0335</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[30px] relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[2px] relative size-full">
        <Container72 />
        <Text25 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[832px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">CMU ANSYS Hall — Foundation Package</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1086px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#9e9e9e] text-[12px] whitespace-nowrap">Fabricated Rebar · 510 items · aSa Steel Fabricators, Murrysville PA</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-[1086px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #D0D0D0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[95px] left-0 top-0 w-[831px]" data-name="Container">
      <div aria-hidden className="absolute border-[#0d7a6e] border-l-6 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OrderCard6() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] h-[95px] relative shrink-0 w-[895px]" data-name="OrderCard">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[22px] pr-[17px] py-[13px] relative size-full">
        <Container71 />
        <Container73 />
        <Container76 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[103px] relative shrink-0 w-[895px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <OrderCard6 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[162.5px] relative shrink-0 w-[1150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[20px] relative size-full">
        <Container69 />
        <Container70 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <Container13 />
        <Container14 />
        <Container32 />
        <Container41 />
        <Container50 />
        <Container59 />
        <Container68 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1198_0_0] h-full min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[65.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] left-[33px] not-italic text-[#9e9e9e] text-[13px] text-center top-0 whitespace-nowrap">Scheduling</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white flex-[260_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Button">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[14px] pr-[12px] py-[8px] relative size-full">
          <Text26 />
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute h-[15.016px] left-0 top-0 w-[14.992px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9922 15.0156">
        <g clipPath="url(#clip0_1_1918)" id="Icon">
          <path d={svgPaths.p2086ee00} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1918">
            <rect fill="white" height="15.0156" width="14.9922" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[15.016px] left-[1.48px] top-[1.49px] w-[14.992px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function GearIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="GearIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container79 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white relative rounded-[8px] self-stretch shrink-0 w-[34px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <GearIcon />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[35.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] left-[61px] not-italic text-[#1a1a1a] text-[13px] text-center top-0 whitespace-nowrap">PGH - Murrysville PA</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[300px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[14px] pr-[12px] py-[8px] relative size-full">
        <Text27 />
        <Icon13 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <button className="bg-white cursor-pointer h-[25px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#1a1a1a] text-[13px] text-center whitespace-nowrap">Day</p>
      </div>
    </button>
  );
}

function Button8() {
  return (
    <div className="h-[25px] relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute bg-[rgba(158,158,158,0.21)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#1a1a1a] text-[13px] text-center whitespace-nowrap">Month</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <div className="relative rounded-[8px] shrink-0 w-[101.984px]" data-name="day">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-px relative rounded-[inherit] size-full">
            <Button7 />
            <Button8 />
          </div>
          <div aria-hidden className="absolute border border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[60.711px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#1a1a1a] text-[13px] top-0 whitespace-nowrap">June 2026</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M6 2.5V9.5" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[22px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 9L4.5 6L7.5 3" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[22px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[22px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button9 />
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[#f0f0f0] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] pt-[8px] px-[12px] relative size-full">
          <Text28 />
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] not-italic relative size-full text-[#9e9e9e] text-[10px] text-center whitespace-nowrap">
        <p className="-translate-x-1/2 absolute left-[21.76px] top-[4.5px]">Su</p>
        <p className="-translate-x-1/2 absolute left-[63.63px] top-[4.5px]">Mo</p>
        <p className="-translate-x-1/2 absolute left-[106.23px] top-[4.5px]">Tu</p>
        <p className="-translate-x-1/2 absolute left-[149.46px] top-[4.5px]">We</p>
        <p className="-translate-x-1/2 absolute left-[192.41px] top-[4.5px]">Th</p>
        <p className="-translate-x-1/2 absolute left-[234.6px] top-[4.5px]">Fr</p>
        <p className="-translate-x-1/2 absolute left-[277.28px] top-[4.5px]">Sa</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[11px] left-[6px] top-[4px] w-[12.234px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#d0d0d0] text-[11px] top-0 whitespace-nowrap">31</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute bg-white border-[#d0d0d0] border-b border-r border-solid h-[52px] left-0 top-0 w-[42.57px]" data-name="Container">
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container88 />
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container90 />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container92 />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container94 />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container96 />
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container98 />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container100 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[11px] left-[6px] top-[4px] w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container102 />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[11px] left-0 not-italic text-[#0d7a6e] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <div className="[word-break:break-word] cursor-pointer font-['Helvetica_Neue:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap" role="button" tabIndex="0">
              <p className="leading-[10px]">Rt.30 Foundation</p>
            </div>
          </div>
        </div>
      </div>
      <Container104 />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container106 />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container108 />
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container110 />
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container112 />
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#2d6cb8] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-white whitespace-nowrap">Mall Garage Mesh Ship</p>
          </div>
        </div>
      </div>
      <Container114 />
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container116 />
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container118 />
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#f59e0b] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Estimate Review</p>
          </div>
        </div>
      </div>
      <Container120 />
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container122 />
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container124() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container124 />
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container126 />
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container128 />
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Jail Annex Mesh Fab</p>
          </div>
        </div>
      </div>
      <Container130 />
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container132 />
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container134 />
    </div>
  );
}

function Text55() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container136 />
    </div>
  );
}

function Text56() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container138() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container138 />
    </div>
  );
}

function Text57() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container140 />
    </div>
  );
}

function Text58() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container142 />
    </div>
  );
}

function Text59() {
  return (
    <div className="h-[11px] relative shrink-0 w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#1a1a1a] text-[11px] text-left top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#9e9e9e] text-[8px] text-left whitespace-nowrap">+1</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Calendar Item">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] py-px relative size-full">
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[10px] not-italic relative shrink-0 text-[8px] text-left text-white whitespace-nowrap">Rt.30 Foundation</p>
          </div>
        </div>
      </div>
      <Container144 />
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute h-[11px] left-[6px] top-[4px] w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#d0d0d0] text-[11px] top-0 whitespace-nowrap">1</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute bg-white border-[#d0d0d0] border-r border-solid h-[52px] left-[127.71px] top-[208px] w-[42.57px]" data-name="Container">
      <Text60 />
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute h-[11px] left-[6px] top-[4px] w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#d0d0d0] text-[11px] top-0 whitespace-nowrap">2</p>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute bg-white border-[#d0d0d0] border-r border-solid h-[52px] left-[170.28px] top-[208px] w-[42.57px]" data-name="Container">
      <Text61 />
    </div>
  );
}

function Text62() {
  return (
    <div className="absolute h-[11px] left-[6px] top-[4px] w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#d0d0d0] text-[11px] top-0 whitespace-nowrap">3</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute bg-white border-[#d0d0d0] border-r border-solid h-[52px] left-[212.85px] top-[208px] w-[42.57px]" data-name="Container">
      <Text62 />
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute h-[11px] left-[6px] top-[4px] w-[6.117px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[11px] left-0 not-italic text-[#d0d0d0] text-[11px] top-0 whitespace-nowrap">4</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute bg-white h-[52px] left-[255.42px] top-[208px] w-[42.578px]" data-name="Container">
      <Text63 />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[260px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container86 />
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[42.57px] p-[4px] top-0 w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text30 />
          <Container87 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[85.14px] p-[4px] top-0 w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text31 />
          <Container89 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[127.71px] p-[4px] top-0 w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text32 />
          <Container91 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[170.28px] p-[4px] top-0 w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text33 />
          <Container93 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[212.85px] p-[4px] top-0 w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text34 />
          <Container95 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[255.42px] p-[4px] top-0 w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
          <Text35 />
          <Container97 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-0 p-[4px] top-[52px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text36 />
          <Container99 />
        </button>
        <div className="absolute bg-white border-[#d0d0d0] border-b border-r border-solid h-[52px] left-[42.57px] top-[52px] w-[42.57px]" data-name="Calendar Day">
          <Text37 />
        </div>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[85.14px] p-[4px] top-[52px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text38 />
          <Container101 />
        </button>
        <button className="absolute bg-[#e6f4f2] content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[127.71px] p-[4px] top-[52px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text39 />
          <Container103 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[170.28px] p-[4px] top-[52px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text40 />
          <Container105 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[212.85px] p-[4px] top-[52px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text41 />
          <Container107 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[255.42px] p-[4px] top-[52px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
          <Text42 />
          <Container109 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-0 p-[4px] top-[104px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text43 />
          <Container111 />
        </button>
        <div className="absolute bg-white content-stretch flex flex-col h-[52px] items-start justify-between left-[42.57px] p-[4px] top-[104px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text44 />
          <Container113 />
        </div>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[85.14px] p-[4px] top-[104px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text45 />
          <Container115 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[127.71px] p-[4px] top-[104px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text46 />
          <Container117 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[170.28px] p-[4px] top-[104px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text47 />
          <Container119 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[212.85px] p-[4px] top-[104px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text48 />
          <Container121 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[255.42px] p-[4px] top-[104px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
          <Text49 />
          <Container123 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-0 p-[4px] top-[156px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text50 />
          <Container125 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[42.57px] p-[4px] top-[156px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text51 />
          <Container127 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[85.14px] p-[4px] top-[156px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text52 />
          <Container129 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[127.71px] p-[4px] top-[156px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text53 />
          <Container131 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[170.28px] p-[4px] top-[156px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text54 />
          <Container133 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[212.85px] p-[4px] top-[156px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-r border-solid inset-0 pointer-events-none" />
          <Text55 />
          <Container135 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[255.42px] p-[4px] top-[156px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
          <Text56 />
          <Container137 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-0 p-[4px] top-[208px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-r border-solid inset-0 pointer-events-none" />
          <Text57 />
          <Container139 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[42.57px] p-[4px] top-[208px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-r border-solid inset-0 pointer-events-none" />
          <Text58 />
          <Container141 />
        </button>
        <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[52px] items-start justify-between left-[85.14px] p-[4px] top-[208px] w-[42.57px]" data-name="Calendar Day">
          <div aria-hidden className="absolute border-[#d0d0d0] border-r border-solid inset-0 pointer-events-none" />
          <Text59 />
          <Container143 />
        </button>
        <Container145 />
        <Container146 />
        <Container147 />
        <Container148 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-white h-[325px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container82 />
        <Container84 />
        <Container85 />
      </div>
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[926px] relative shrink-0 w-[316px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 w-[300px]" data-name="CalendarWidget">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
            <Container78 />
            <Button6 />
            <Container80 />
            <Container81 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[1149.25px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container11 />
        <Container77 />
      </div>
    </div>
  );
}

function PortalPage() {
  return (
    <div className="flex-[1514_0_0] h-full min-w-px relative" data-name="PortalPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1198.25_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <SideNav />
        <PortalPage />
      </div>
    </div>
  );
}

function Shell() {
  return (
    <div className="bg-[#f0f0f0] h-[1609px] min-h-[945px] relative shrink-0 w-full" data-name="Shell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[1193px] relative shrink-0 w-[1440px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Shell />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="HomePage">
      <div className="bg-[#0d7a6e] h-[56px] relative shrink-0 w-[1440px]" data-name="TopNavBar">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Frame />
          <Container />
          <Container1 />
        </div>
      </div>
      <Body />
    </div>
  );
}