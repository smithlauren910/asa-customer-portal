import svgPaths from "./svg-f972b44j3n";
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
        <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-left top-[0.5px] whitespace-nowrap">Loads / Shipments</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <a className="cursor-pointer h-[40px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[19px] relative size-full">
          <Text1 />
        </div>
      </div>
    </a>
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
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-3 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
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
      <div aria-hidden className="absolute border-[#0d7a6e] border-l-3 border-solid inset-0 pointer-events-none" />
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
    <div className="h-[36px] relative shrink-0 w-[86.719px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#1f2937] text-[24px] top-0 whitespace-nowrap">Account</p>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="PageHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Account1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Account">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[30px] not-italic relative shrink-0 text-[#1f2937] text-[20px] whitespace-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#374151] text-[13px] tracking-[-0.0762px] whitespace-nowrap">First Name</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f9fafb] h-[42px] relative rounded-[8px] shrink-0 w-[321.664px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6b7280] text-[16px] tracking-[-0.3125px] w-full">John</p>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInputMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="TextInput (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <TextInput />
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="absolute content-stretch flex flex-col h-[67.5px] items-start left-0 top-0 w-[321.664px]" data-name="Field">
      <Label />
      <TextInputMargin />
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#374151] text-[13px] tracking-[-0.0762px] whitespace-nowrap">Last Name</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[#f9fafb] h-[42px] relative rounded-[8px] shrink-0 w-[321.664px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6b7280] text-[16px] tracking-[-0.3125px] w-full">Doe</p>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInputMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="TextInput (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <TextInput1 />
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[67.5px] items-start left-[345.66px] top-0 w-[321.664px]" data-name="Field">
      <Label1 />
      <TextInputMargin1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#374151] text-[13px] tracking-[-0.0762px] whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[#f9fafb] h-[42px] relative rounded-[8px] shrink-0 w-[321.664px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6b7280] text-[16px] tracking-[-0.3125px] w-full">JohnDoe@riverfront-construction.com</p>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInputMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="TextInput (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <TextInput2 />
      </div>
    </div>
  );
}

function Field2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[67.5px] items-start left-0 top-[83.5px] w-[321.664px]" data-name="Field">
      <Label2 />
      <TextInputMargin2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#374151] text-[13px] tracking-[-0.0762px] whitespace-nowrap">Phone</p>
      </div>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-[#f9fafb] h-[42px] relative rounded-[8px] shrink-0 w-[321.664px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6b7280] text-[16px] tracking-[-0.3125px] w-full">(412) 999-9999</p>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInputMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="TextInput (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <TextInput3 />
      </div>
    </div>
  );
}

function Field3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[67.5px] items-start left-[345.66px] top-[83.5px] w-[321.664px]" data-name="Field">
      <Label3 />
      <TextInputMargin3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#374151] text-[13px] tracking-[-0.0762px] whitespace-nowrap">Job Title</p>
      </div>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-[#f9fafb] h-[42px] relative rounded-[8px] shrink-0 w-[321.664px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6b7280] text-[16px] tracking-[-0.3125px] w-full">Project Manager</p>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInputMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="TextInput (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <TextInput4 />
      </div>
    </div>
  );
}

function Field4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[67.5px] items-start left-0 top-[167px] w-[321.664px]" data-name="Field">
      <Label4 />
      <TextInputMargin4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#374151] text-[13px] tracking-[-0.0762px] whitespace-nowrap">Company</p>
      </div>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="bg-[#f9fafb] h-[42px] relative rounded-[8px] shrink-0 w-[321.664px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6b7280] text-[16px] tracking-[-0.3125px] w-full">Riverfront Construction LLC</p>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInputMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="TextInput (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <TextInput5 />
      </div>
    </div>
  );
}

function Field5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[67.5px] items-start left-[345.66px] top-[167px] w-[321.664px]" data-name="Field">
      <Label5 />
      <TextInputMargin5 />
    </div>
  );
}

function Account2() {
  return (
    <div className="h-[250.5px] relative shrink-0 w-full" data-name="Account">
      <Field />
      <Field1 />
      <Field2 />
      <Field3 />
      <Field4 />
      <Field5 />
    </div>
  );
}

function AccountMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Account (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Account2 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col items-start left-0 p-[25px] rounded-[8px] top-0 w-[717px]" data-name="Card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Account1 />
      <AccountMargin />
    </div>
  );
}

function Account3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Account">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[30px] not-italic relative shrink-0 text-[#1f2937] text-[20px] whitespace-nowrap">Account Summary</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Customer ID</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] tracking-[-0.3125px] whitespace-nowrap">CUST-00412</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Primary Fabricator</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] tracking-[-0.3125px] whitespace-nowrap">Pittsburgh Rebar Co.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[54px] relative shrink-0 w-[296.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Member Since</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] tracking-[-0.3125px] whitespace-nowrap">March 2023</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[54px] relative shrink-0 w-[296.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Account4() {
  return (
    <div className="h-[220px] relative shrink-0 w-[296.664px]" data-name="Account">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container10 />
        <Container13 />
        <Container16 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[347px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[25px] relative size-full">
        <Account3 />
        <Account4 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[741px] size-[347px] top-0" data-name="Container">
      <Card1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[1039px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Container9 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="h-[811px] relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Account() {
  return (
    <div className="absolute content-stretch flex flex-col h-[968px] items-start left-[287px] p-[32px] top-[56px] w-[1152px]" data-name="Account">
      <PageHeader />
      <ContainerMargin />
    </div>
  );
}

export default function Acccount() {
  return (
    <div className="bg-white relative size-full" data-name="Acccount">
      <div className="absolute bg-[#0d7a6e] content-stretch flex h-[56px] items-center justify-between left-0 px-[24px] top-0 w-[1440px]" data-name="TopNavBar">
        <Frame />
        <Container />
        <Container1 />
      </div>
      <NavSideBarVar />
      <Account />
    </div>
  );
}