import svgPaths from "./svg-fg702bxuaz";
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
    <div className="absolute bg-[#f0f0f0] h-[968px] left-0 overflow-clip top-[56px] w-[288px]" data-name="Nav Side Bar Var">
      <Frame1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[105.367px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[36px] left-0 not-italic text-[#1f2937] text-[24px] top-0 whitespace-nowrap">Loads / Shipments</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="h-[64px] relative shrink-0 w-[1088px]" data-name="PageHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-0">
          <div className="bg-[#0d7a6e] content-stretch flex flex-col items-center justify-center px-[17px] py-[7px] relative rounded-[16777200px] shrink-0" data-name="Button">
            <div aria-hidden className="absolute border border-[#0d7a6e] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">All</p>
          </div>
          <button className="bg-white content-stretch cursor-pointer flex flex-col items-center justify-center px-[17px] py-[7px] relative rounded-[16777200px] shrink-0" data-name="Button">
            <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Upcoming</p>
          </button>
          <button className="bg-white content-stretch cursor-pointer flex flex-col items-center justify-center px-[17px] py-[7px] relative rounded-[16777200px] shrink-0" data-name="Button">
            <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">In Progress</p>
          </button>
          <button className="bg-white content-stretch cursor-pointer flex flex-col items-center justify-center px-[17px] py-[7px] relative rounded-[16777200px] shrink-0" data-name="Button">
            <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Past</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 10.5L5.25 7L8.75 3.5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[4px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[31.32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#374151] text-[13px] top-px tracking-[-0.0762px] whitespace-nowrap">1 of 1</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[4px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text6() {
  return <div className="h-[19.5px] relative shrink-0 w-[59.227px]" data-name="Text" />;
}

function TextMargin() {
  return (
    <div className="relative shrink-0" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[8px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-[166.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button />
        <Text5 />
        <Button1 />
        <TextMargin />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[120.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic right-[60px] text-[#6b7280] text-[13px] top-px tracking-[-0.0762px] translate-x-full whitespace-nowrap">{`Results: 5 `}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] pt-[8px] px-[12px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="[word-break:break-word] absolute bg-[#f3f4f6] border-[#e5e7eb] border-b border-solid font-['Helvetica_Neue:Bold',sans-serif] h-[36px] leading-[19.5px] left-0 not-italic text-[#374151] text-[13px] top-0 tracking-[-0.0762px] w-[1086px] whitespace-nowrap" data-name="Table Row">
      <p className="absolute left-[50px] top-[9px]">Shipping Ticket #</p>
      <p className="absolute left-[320px] top-[7.5px]">Shipment Date</p>
      <p className="absolute left-[591px] top-[8.5px]">Job Name</p>
      <p className="absolute left-[863px] top-[8.5px]">Status</p>
    </div>
  );
}

function TextInput() {
  return <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[45.58px] rounded-[4px] top-[7px] w-[165.547px]" data-name="Text Input" />;
}

function Icon4() {
  return (
    <div className="absolute left-[193.13px] size-[12px] top-[14.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[45.58px] top-[7px]">
      <TextInput />
      <Icon4 />
    </div>
  );
}

function TextInput1() {
  return <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[315px] right-[588.8px] rounded-[4px] top-[7px]" data-name="Text Input" />;
}

function Icon5() {
  return (
    <div className="absolute left-[477.2px] size-[12px] top-[14.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[315px] top-[7px]">
      <TextInput1 />
      <Icon5 />
    </div>
  );
}

function TextInput2() {
  return <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[586px] rounded-[4px] top-[7px] w-[165.547px]" data-name="Text Input" />;
}

function Icon6() {
  return (
    <div className="absolute left-[729.55px] size-[12px] top-[14.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[586px] top-[7px]">
      <TextInput2 />
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[145px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[857px] overflow-clip rounded-[4px] top-[7px] w-[165.547px]" data-name="Text Input">
      <Icon7 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[857px] top-[7px]">
      <TextInput3 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-b border-solid h-[42px] left-0 top-[35.5px] w-[1086px]" data-name="Table Row">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Button2() {
  return <div className="absolute h-[24px] left-[974.39px] top-[10.5px] w-[91.031px]" data-name="Button" />;
}

function Button3() {
  return <div className="absolute h-[24px] left-[974.39px] top-[10.5px] w-[91.031px]" data-name="Button" />;
}

function Button4() {
  return <div className="absolute h-[24px] left-[974.39px] top-[10.5px] w-[91.031px]" data-name="Button" />;
}

function Button5() {
  return <div className="absolute h-[24px] left-[974.39px] top-[10.5px] w-[91.031px]" data-name="Button" />;
}

function Button6() {
  return <div className="absolute h-[24px] left-[974.39px] top-[10.5px] w-[91.031px]" data-name="Button" />;
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[77px] w-[1086px]">
      <div className="h-[45px] relative shrink-0 w-[1086px]" data-name="Table Row">
        <div className="absolute gap-x-[99px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] inset-0 px-[50px] py-[11px]" data-name="Table Row">
          <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
          <Button2 />
          <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1f2937] text-[13px] tracking-[-0.0762px]">10421</p>
          <p className="[word-break:break-word] col-2 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Jun 12, 2026</p>
          <p className="[word-break:break-word] col-3 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Riverfront Tower — Floor 3</p>
          <p className="[word-break:break-word] col-4 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-1 self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Shipped</p>
        </div>
      </div>
      <div className="h-[45px] relative shrink-0 w-full" data-name="Table Row">
        <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
        <div className="gap-x-[99px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] px-[50px] py-[11px] relative size-full">
          <Button3 />
          <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1f2937] text-[13px] tracking-[-0.0762px]">​</p>
          <p className="[word-break:break-word] col-2 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Jun 14, 2026</p>
          <p className="[word-break:break-word] col-3 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Northgate Plaza — Pad B</p>
          <p className="[word-break:break-word] col-4 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-1 self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Scheduled</p>
        </div>
      </div>
      <div className="h-[45px] relative shrink-0 w-full" data-name="Table Row">
        <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
        <div className="gap-x-[99px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] px-[50px] py-[11px] relative size-full">
          <Button4 />
          <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">10402</p>
          <p className="[word-break:break-word] col-2 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Jun 16, 2026</p>
          <p className="[word-break:break-word] col-3 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Maple Heights — Block 2</p>
          <p className="[word-break:break-word] col-4 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-1 self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Confirmed</p>
        </div>
      </div>
      <div className="h-[45px] relative shrink-0 w-full" data-name="Table Row">
        <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
        <div className="gap-x-[99px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] px-[50px] py-[11px] relative size-full">
          <Button5 />
          <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">10388</p>
          <p className="[word-break:break-word] col-2 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Jun 4, 2026</p>
          <p className="[word-break:break-word] col-3 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Eastside Garage</p>
          <p className="[word-break:break-word] col-4 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-1 self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Delivered</p>
        </div>
      </div>
      <div className="h-[45px] relative shrink-0 w-full" data-name="Table Row">
        <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
        <div className="gap-x-[99px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] px-[50px] py-[11px] relative size-full">
          <Button6 />
          <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">10371</p>
          <p className="[word-break:break-word] col-2 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">May 28, 2026</p>
          <p className="[word-break:break-word] col-3 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-[1/span_2] self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Riverfront Tower — Floor 2</p>
          <p className="[word-break:break-word] col-4 font-['Helvetica_Neue:Regular',sans-serif] justify-self-stretch leading-[19.5px] not-italic relative row-1 self-stretch shrink-0 text-[#1a1a1a] text-[13px] tracking-[-0.0762px]">Delivered</p>
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="h-[301.5px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TableRow />
        <TableRow1 />
        <Frame2 />
      </div>
    </div>
  );
}

function DataTable() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="DataTable">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container9 />
        <Table />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Deliveries1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[520px] items-start left-[288px] p-[32px] top-[54px] w-[1152px]" data-name="Deliveries">
      <PageHeader />
      <InlineContent />
      <DataTable />
    </div>
  );
}

export default function Deliveries() {
  return (
    <div className="bg-white relative size-full" data-name="Deliveries">
      <div className="absolute bg-[#0d7a6e] content-stretch flex h-[56px] items-center justify-between left-0 px-[24px] top-0 w-[1440px]" data-name="TopNavBar">
        <Frame />
        <Container />
        <Container1 />
      </div>
      <NavSideBarVar />
      <Deliveries1 />
    </div>
  );
}