import svgPaths from "./svg-o193bqmtph";
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

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[73.352px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#1f2937] text-[24px] top-0 whitespace-nowrap">Orders</p>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="h-[60px] relative shrink-0 w-[1088px]" data-name="PageHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[24px] relative size-full">
        <Heading />
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
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Active</p>
          </button>
          <button className="bg-white content-stretch cursor-pointer flex flex-col items-center justify-center px-[17px] py-[7px] relative rounded-[16777200px] shrink-0" data-name="Button">
            <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
            <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Upcoming</p>
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

function Text() {
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

function Text1() {
  return <div className="h-[19.5px] relative shrink-0 w-[41.375px]" data-name="Text" />;
}

function TextMargin() {
  return (
    <div className="relative shrink-0" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[8px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[148.695px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button />
        <Text />
        <Button1 />
        <TextMargin />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[102.211px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic right-[60px] text-[#6b7280] text-[13px] top-px tracking-[-0.0762px] translate-x-full whitespace-nowrap">{`Results: 5 `}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] pt-[8px] px-[12px] relative size-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#f3f4f6] h-[36px] relative shrink-0 w-[1086px]" data-name="Table Row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[19.5px] left-[50px] not-italic text-[#374151] text-[13px] top-[9px] tracking-[-0.0762px] whitespace-nowrap">Order #</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[19.5px] left-[193px] not-italic text-[#374151] text-[13px] top-[8.5px] tracking-[-0.0762px] whitespace-nowrap">Description</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[19.5px] left-[430.75px] not-italic text-[#374151] text-[13px] top-[9px] tracking-[-0.0762px] whitespace-nowrap">Date Placed</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[19.5px] left-[796.3px] not-italic text-[#374151] text-[13px] top-[8px] tracking-[-0.0762px] whitespace-nowrap">Weight</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[19.5px] left-[939.84px] not-italic text-[#374151] text-[13px] top-[9px] tracking-[-0.0762px] whitespace-nowrap">Status</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[19.5px] left-[579px] not-italic text-[#374151] text-[13px] top-[8.5px] tracking-[-0.0762px] whitespace-nowrap">Job Name</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[86px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[46px] overflow-clip rounded-[4px] top-[7px] w-[105px]" data-name="Text Input">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[86px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[796px] overflow-clip rounded-[4px] top-[6px] w-[105px]" data-name="Text Input">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[86px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[46px] overflow-clip rounded-[4px] top-[7px] w-[105px]" data-name="Text Input">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return <div className="absolute left-[715.55px] size-[12px] top-[14.5px]" data-name="Icon" />;
}

function TextInput3() {
  return <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[189px] rounded-[4px] top-[6px] w-[203px]" data-name="Text Input" />;
}

function Icon8() {
  return (
    <div className="absolute left-[374px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return <div className="absolute left-[900.55px] size-[12px] top-[14.5px]" data-name="Icon" />;
}

function Icon10() {
  return (
    <div className="absolute left-[86px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[431px] overflow-clip rounded-[4px] top-[6px] w-[105px]" data-name="Text Input">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[86px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[940px] overflow-clip rounded-[4px] top-[6px] w-[105px]" data-name="Text Input">
      <Icon11 />
    </div>
  );
}

function TextInput6() {
  return <div className="absolute bg-white border border-[#d1d5db] border-solid h-[28px] left-[575px] rounded-[4px] top-[6px] w-[182.203px]" data-name="Text Input" />;
}

function Icon12() {
  return (
    <div className="absolute left-[739.2px] size-[12px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5713840} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="bg-white h-[41px] relative shrink-0 w-[1086px]" data-name="Table Row">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <TextInput />
      <TextInput1 />
      <TextInput2 />
      <Icon7 />
      <TextInput3 />
      <Icon8 />
      <Icon9 />
      <TextInput4 />
      <TextInput5 />
      <TextInput6 />
      <Icon12 />
    </div>
  );
}

function Checkbox() {
  return <div className="absolute left-[12px] size-[14px] top-[13.25px]" data-name="Checkbox" />;
}

function TableRow2() {
  return (
    <div className="bg-white h-[45px] relative shrink-0 w-[1086px]" data-name="Table Row">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Checkbox />
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[50px] not-italic text-[#1a1a1a] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">ORD-10421</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[193px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] w-[364px]">Column Ties - Grid A/B, Floor 3</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[430.75px] not-italic text-[#1f2937] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">Jun 1, 2026</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[796.3px] not-italic text-[#1f2937] text-[13px] top-[12.75px] tracking-[-0.0762px] whitespace-nowrap">240.8 lbs</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[940px] not-italic text-[#1f2937] text-[13px] top-[13.5px] tracking-[-0.0762px] whitespace-nowrap">Open</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[940px] not-italic text-[#1f2937] text-[13px] top-[149px] tracking-[-0.0762px] whitespace-nowrap">Open</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[579px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">Riverfront Tower — Floor 3</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[940px] not-italic text-[#1f2937] text-[13px] top-[13.5px] tracking-[-0.0762px] whitespace-nowrap">Open</p>
    </div>
  );
}

function Checkbox1() {
  return <div className="absolute left-[12px] size-[14px] top-[13.25px]" data-name="Checkbox" />;
}

function Button2() {
  return <div className="absolute h-[24px] left-[974.39px] top-[10.5px] w-[91.031px]" data-name="Button" />;
}

function TableRow3() {
  return (
    <div className="h-[45px] relative shrink-0 w-[1086px]" data-name="Table Row">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Checkbox1 />
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[50px] not-italic text-[#1a1a1a] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">ORD-10418</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[193px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">Column Ties - Pad B</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[430.75px] not-italic text-[#1f2937] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">May 30, 2026</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[796.3px] not-italic text-[#1f2937] text-[13px] top-[12.75px] tracking-[-0.0762px] whitespace-nowrap">80.9 lbs</p>
      <Button2 />
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[940px] not-italic text-[#1f2937] text-[13px] top-[13.5px] tracking-[-0.0762px] whitespace-nowrap">In Fabrication</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[579px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">Northgate Plaza — Pad B</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[940px] not-italic text-[#1f2937] text-[13px] top-[13.5px] tracking-[-0.0762px] whitespace-nowrap">In Fabrication</p>
    </div>
  );
}

function Checkbox2() {
  return <div className="absolute left-[12px] size-[14px] top-[13.25px]" data-name="Checkbox" />;
}

function TableRow4() {
  return (
    <div className="h-[45px] relative shrink-0 w-[1086px]" data-name="Table Row">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Checkbox2 />
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[50px] not-italic text-[#1a1a1a] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">ORD-10402</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[193px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">Beam Cages - Level 2 East Wing</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[430.75px] not-italic text-[#1f2937] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">May 22, 2026</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[796.3px] not-italic text-[#1f2937] text-[13px] top-[12.75px] tracking-[-0.0762px] whitespace-nowrap">16,010.0 lbs</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[940px] not-italic text-[#1f2937] text-[13px] top-[13.5px] tracking-[-0.0762px] whitespace-nowrap">Processed</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[579px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">Maple Heights — Block 2</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[940px] not-italic text-[#1f2937] text-[13px] top-[13.5px] tracking-[-0.0762px] whitespace-nowrap">Processed</p>
    </div>
  );
}

function Checkbox3() {
  return <div className="absolute left-[12px] size-[14px] top-[13.25px]" data-name="Checkbox" />;
}

function TableRow5() {
  return (
    <div className="h-[45px] relative shrink-0 w-[1086px]" data-name="Table Row">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Checkbox3 />
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[50px] not-italic text-[#1a1a1a] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">ORD-10388</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[193px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">{`Slab Mat - Bay 7 & 8, Floor 3`}</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[430.75px] not-italic text-[#1f2937] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">May 14, 2026</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[796.3px] not-italic text-[#1f2937] text-[13px] top-[12.75px] tracking-[-0.0762px] whitespace-nowrap">1,562.1 lbs</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[579px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">Eastside Garage</p>
    </div>
  );
}

function Checkbox4() {
  return <div className="absolute left-[12px] size-[14px] top-[13.25px]" data-name="Checkbox" />;
}

function TableRow6() {
  return (
    <div className="h-[44.5px] relative shrink-0 w-[1086px]" data-name="Table Row">
      <Checkbox4 />
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[50px] not-italic text-[#1a1a1a] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">ORD-10371</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[193px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">Column Ties - Grid A/B, Floor 2</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[430.75px] not-italic text-[#1f2937] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">May 7, 2026</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[796.3px] not-italic text-[#1f2937] text-[13px] top-[12.75px] tracking-[-0.0762px] whitespace-nowrap">923.0 lbs</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[940px] not-italic text-[#1f2937] text-[13px] top-[13.5px] tracking-[-0.0762px] whitespace-nowrap">Invoiced</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[579px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">Riverfront Tower — Floor 2</p>
    </div>
  );
}

function Checkbox5() {
  return <div className="absolute left-[12px] size-[14px] top-[13.25px]" data-name="Checkbox" />;
}

function TableRow7() {
  return (
    <div className="h-[45px] relative shrink-0 w-[1086px]" data-name="Table Row">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Checkbox5 />
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[50px] not-italic text-[#1a1a1a] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">ORD-10388</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[193px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">{`Slab Mat - Bay 7 & 8, Floor 3`}</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[430.75px] not-italic text-[#1f2937] text-[13px] top-[13.75px] tracking-[-0.0762px] whitespace-nowrap">May 14, 2026</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[796.3px] not-italic text-[#1f2937] text-[13px] top-[12.75px] tracking-[-0.0762px] whitespace-nowrap">1,562.1 lbs</p>
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[19.5px] left-[579px] not-italic text-[#1a1a1a] text-[13px] top-[13.25px] tracking-[-0.0762px] whitespace-nowrap">Eastside Garage</p>
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <TableRow />
        <TableRow1 />
        <TableRow2 />
        <TableRow3 />
        <TableRow4 />
        <TableRow5 />
        <TableRow6 />
        <TableRow7 />
      </div>
    </div>
  );
}

function DataTable() {
  return (
    <div className="bg-white h-[342.5px] relative rounded-[8px] shrink-0 w-[1088px]" data-name="DataTable">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container3 />
        <Table />
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container6() {
  return <div className="h-[30px] relative shrink-0 w-[1088px]" data-name="Container" />;
}

function Orders1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[546px] items-start left-[288px] p-[32px] top-[56px] w-[1152px]" data-name="Orders">
      <PageHeader />
      <InlineContent />
      <DataTable />
      <Container6 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-left top-[0.5px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <a className="absolute content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center left-0 pl-[19px] top-0 w-[287px]" data-name="Container">
      <div aria-hidden className="absolute border-[#c8c8c8] border-l-3 border-solid inset-0 pointer-events-none" />
      <Text2 />
    </a>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-left top-[0.5px] whitespace-nowrap">Loads / Shipments</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <a className="absolute content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center left-0 pl-[19px] top-[40px] w-[287px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-3 border-solid inset-0 pointer-events-none" />
      <Text3 />
    </a>
  );
}

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black top-[0.5px] whitespace-nowrap">Orders</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[40px] items-center left-0 pl-[19px] top-[80px] w-[287px]" data-name="Container">
      <div aria-hidden className="absolute border-[#0d7a6e] border-l-3 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-left top-[0.5px] whitespace-nowrap">Invoices</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <a className="absolute content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center left-0 pl-[19px] top-[120px] w-[287px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-3 border-solid inset-0 pointer-events-none" />
      <Text5 />
    </a>
  );
}

function Text6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1a1a1a] text-[14px] text-left top-[0.5px] whitespace-nowrap">Account</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <a className="absolute content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center left-0 pl-[19px] top-[160px] w-[287px]" data-name="Container">
      <div aria-hidden className="absolute border-[#c8c8c8] border-l-3 border-solid inset-0 pointer-events-none" />
      <Text6 />
    </a>
  );
}

function NavSideBarVar() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[968px] left-0 overflow-clip top-[56px] w-[288px]" data-name="Nav Side Bar Var">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

export default function Orders() {
  return (
    <div className="bg-white relative size-full" data-name="Orders">
      <div className="absolute bg-[#0d7a6e] content-stretch flex h-[56px] items-center justify-between left-0 px-[24px] top-0 w-[1440px]" data-name="TopNavBar">
        <Frame />
        <Container />
        <Container1 />
      </div>
      <Orders1 />
      <NavSideBarVar />
    </div>
  );
}