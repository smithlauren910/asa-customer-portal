import svgPaths from "./svg-wpoo7r75oy";
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
    <div className="h-[21px] relative shrink-0 w-[50.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-left top-[0.5px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <a className="cursor-pointer h-[40px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#c8c8c8] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[19px] relative size-full">
          <Text />
        </div>
      </div>
    </a>
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

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#095c53] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[19px] relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black top-[0.5px] whitespace-nowrap">Orders</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#c8c8c8] border-l-3 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[19px] relative size-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black top-[0.5px] whitespace-nowrap">Invoices</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[19px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1a1a1a] text-[14px] top-[0.5px] whitespace-nowrap">Account</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#c8c8c8] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[19px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[287px]">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function NavSideBarVar() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[1462px] left-0 overflow-clip top-[56px] w-[288px]" data-name="Nav Side Bar Var">
      <Frame1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #0D7A6E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <a className="cursor-pointer h-[19.5px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Icon2 />
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0d7a6e] text-[12px] text-center whitespace-nowrap">Back to Loads</p>
      </div>
    </a>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[105.367px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[30px] left-0 not-italic text-[#1f2937] text-[24px] top-[9px] w-[254px]">Load / Shipment Detail</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[26px] relative shrink-0 w-[707px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Riverfront Tower — Floor 3</p>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="h-[64px] relative shrink-0 w-[1088px]" data-name="PageHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container8 />
        <Paragraph />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] whitespace-nowrap">Load Summary</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Shipping Ticket #</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">Not yet assigned</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-0 top-0 w-[304.5px]" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Shipment Date</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">Jun 12, 2026</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[352.5px] top-0 w-[304.5px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[27.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1a1a1a] text-[14px] top-[-2.5px] whitespace-nowrap">Scheduled</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-0 top-[53px] w-[304.5px]" data-name="Container">
      <Text9 />
      <Container14 />
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Fabricator</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">Pittsburgh Rebar Co.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[47.5px] items-start left-[352.5px] top-[53px] w-[304.5px]" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Job Name</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">Riverfront Tower — Floor 3</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-0 top-[112.5px] w-[304.5px]" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Load ID</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">LOAD-4821</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[352.5px] top-[112.5px] w-[304.5px]" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[153.5px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative size-full">
        <Heading1 />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] whitespace-nowrap">Orders in This Load</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid font-['Helvetica_Neue:Medium',sans-serif] h-[38px] left-0 text-[#374151] top-0 w-[1086px]" data-name="Table Row">
      <p className="absolute left-[24px] top-[8px]">Order #</p>
      <p className="absolute left-[194.18px] top-[8px]">Description</p>
      <p className="absolute left-[614.01px] top-[8px]">Weight</p>
      <p className="absolute left-[770.02px] top-[8px]">Status</p>
      <p className="absolute left-[920.21px] top-[8px]">Shipment Date</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid font-['Helvetica_Neue:Regular',sans-serif] h-[52px] left-0 top-[38px] w-[1086px]" data-name="Table Row">
      <p className="absolute left-[24px] text-[#1a1a1a] top-[15.75px]">ORD-10421</p>
      <p className="absolute left-[194.18px] text-[#1f2937] top-[15.75px]">Column Ties — Grid A/B, Floors 3–5</p>
      <p className="absolute left-[614.01px] text-[#1f2937] top-[15.75px]">5,800.1 lbs</p>
      <p className="absolute left-[920.21px] text-[#1f2937] top-[15.75px]">Jun 12, 2026</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid font-['Helvetica_Neue:Regular',sans-serif] h-[53px] left-0 top-[90px] w-[1086px]" data-name="Table Row">
      <p className="absolute left-[24px] text-[#1a1a1a] top-[15.75px]">ORD-10419</p>
      <p className="absolute left-[194.18px] text-[#1f2937] top-[15.75px]">Beam Cages — Level 3 East Wing</p>
      <p className="absolute left-[614.01px] text-[#1f2937] top-[15.75px]">490.7 lbs</p>
      <p className="absolute left-[920.21px] text-[#1f2937] top-[15.75px]">Jun 12, 2026</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute font-['Helvetica_Neue:Regular',sans-serif] h-[52px] left-0 top-[143px] w-[1086px]" data-name="Table Row">
      <p className="absolute left-[24px] text-[#1a1a1a] top-[15.75px]">ORD-10415</p>
      <p className="absolute left-[194.18px] text-[#1f2937] top-[15.75px]">{`Slab Mat — Bay 7 & 8, Floor 3`}</p>
      <p className="absolute left-[614.01px] text-[#1f2937] top-[15.75px]">50.6 lbs</p>
      <p className="absolute left-[920.21px] text-[#1f2937] top-[15.75px]">Jun 12, 2026</p>
    </div>
  );
}

function Table() {
  return (
    <div className="h-[195px] relative shrink-0 w-full" data-name="Table">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid leading-[21px] not-italic relative size-full text-[14px] whitespace-nowrap">
        <TableRow />
        <TableRow1 />
        <TableRow2 />
        <TableRow3 />
        <p className="absolute font-['Helvetica_Neue:Regular',sans-serif] left-[770px] text-[#1f2937] top-[54px]">Open</p>
        <p className="absolute font-['Helvetica_Neue:Regular',sans-serif] left-[770px] text-[#1f2937] top-[159px]">Open</p>
        <p className="absolute font-['Helvetica_Neue:Regular',sans-serif] left-[770px] text-[#1f2937] top-[106px]">Open</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Italic',sans-serif] italic leading-[18px] relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">To request a date change for a single order, contact your fabricator directly.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] pt-[13px] px-[16px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white h-[296px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container19 />
        <Table />
        <Container20 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] whitespace-nowrap">Request Shipment Date Change</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[786px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Requesting a new date applies to this entire load and all orders listed above.</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Requested Shipment Date</p>
      </div>
    </div>
  );
}

function Label1() {
  return <div className="absolute content-stretch flex flex-col h-[21px] items-start left-[10px] top-[7px] w-[480px]" data-name="Label" />;
}

function DatePicker() {
  return (
    <button className="absolute bg-white block border border-[#d1d5db] border-solid cursor-pointer h-[38px] left-0 overflow-clip rounded-[6px] top-0 w-[480px]" data-name="Date Picker">
      <Label1 />
    </button>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[452px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white h-[38px] relative shrink-0 w-[480px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DatePicker />
        <Icon3 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label />
        <Container24 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#374151] text-[0px] whitespace-nowrap">
          <span className="leading-[21px] text-[14px]">{`Reason for Change `}</span>
          <span className="leading-[21px] text-[#9ca3af] text-[14px]">(optional)</span>
        </p>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white h-[80.5px] relative rounded-[6px] shrink-0 w-[480px]" data-name="Text Area">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip px-[13px] py-[11px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">e.g., site not ready, pour rescheduled.</p>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label2 />
        <TextArea />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#0d7a6e] border border-[#0d7a6e] border-solid h-[39.5px] left-0 rounded-[16777200px] top-0 w-[140.078px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-[68.5px] not-italic text-[14px] text-center text-white top-[7.5px] whitespace-nowrap">Submit Request</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[39.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="max-w-[480px] relative shrink-0 w-[480px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start max-w-[inherit] pt-[20px] relative size-full">
        <Container23 />
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Italic',sans-serif] italic leading-[18px] relative shrink-0 text-[#9ca3af] text-[12px] w-[480px]">Requests are subject to fabricator approval. You will be notified by email once your request is reviewed.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative size-full">
        <Heading3 />
        <Paragraph2 />
        <Container22 />
        <ParagraphMargin />
      </div>
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[455px] items-start pt-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container21 />
    </div>
  );
}

function Text16() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">Screen variant:</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0d7a6e] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#0d7a6e] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[13px] py-[5px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Open — Date Change Available</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[13px] py-[5px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#374151] text-[14px] text-center whitespace-nowrap">Locked — Ticket Confirmed</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#d1d5db] border-dashed inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[17px] py-[13px] relative size-full">
          <Text16 />
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14px] items-center pb-[16px] relative size-full">
        <ContainerMargin4 />
        <Container27 />
      </div>
    </div>
  );
}

function Deliveries() {
  return (
    <div className="absolute content-stretch flex flex-col h-[520px] items-start left-[288px] p-[32px] top-[54px] w-[1152px]" data-name="Deliveries">
      <Button />
      <PageHeader />
      <ContainerMargin />
      <ContainerMargin2 />
      <ContainerMargin3 />
    </div>
  );
}

export default function LoadDetailsOpen() {
  return (
    <div className="bg-white relative size-full" data-name="Load Details - Open">
      <div className="absolute bg-[#0d7a6e] content-stretch flex h-[56px] items-center justify-between left-0 px-[24px] top-0 w-[1440px]" data-name="TopNavBar">
        <Frame />
        <Container />
        <Container1 />
      </div>
      <NavSideBarVar />
      <Deliveries />
    </div>
  );
}