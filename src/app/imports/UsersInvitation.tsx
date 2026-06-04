import svgPaths from "./svg-huamqehhad";
import imgRectangle from "figma:asset/0489283d4e6a67990eef211c1d7f3af18803252f.png";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3, imgGroup4, imgGroup5, imgGroup6, imgGroup7 } from "./svg-0uttj";

function Navbar() {
  return <div className="absolute bg-white h-[65px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[595px]" data-name="NAVBAR" />;
}

function Group() {
  return (
    <div className="absolute inset-[25.94%_13.76%_25.95%_13.76%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 22">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p220d9680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p82c600} fill="var(--fill-0, #FAA919)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p784e700} fill="var(--fill-0, #E0891A)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p4163400} fill="var(--fill-0, #E0891A)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p2ea63af0} fill="var(--fill-0, #B4B4B4)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p2ea48800} fill="var(--fill-0, #B4B4B4)" fillRule="evenodd" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[-24.2%_-11.77%_-23.87%_-24.64%] mix-blend-multiply" data-name="Group">
      <div className="absolute inset-[-24.2%_-11.77%_-23.87%_-24.64%] mix-blend-multiply opacity-[0.45]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[-24.2%_-11.77%_-23.87%_-24.64%]" data-name="Group">
      <div className="absolute inset-[3.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
          <path d={svgPaths.p29f22100} fill="var(--fill-0, #404068)" id="Vector" />
        </svg>
      </div>
      <Group />
      <Group2 />
      <div className="absolute inset-[1.46%]" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
          <path d={svgPaths.pf584e00} fill="var(--fill-0, #0091FF)" id="Vector (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[-24.2%_-11.77%_-23.87%_-24.64%]" data-name="Layer_1">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[-24.2%_-11.77%_-23.87%_-24.64%]" data-name="Group">
      <Layer />
    </div>
  );
}

function WeBillNewEmailIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[44px]" data-name="WeBill - New Email Icon-03 2">
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] h-[55.221px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[50.803px_17.138px] mask-size-[3.05px_8.564px] ml-[-1665.71%] mt-[-200.11%] relative w-[95.97px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 56">
        <g id="Group">
          <path d={svgPaths.p35a71d00} fill="var(--fill-0, #404041)" id="Vector" />
          <g id="Clip path group">
            <mask height="56" id="mask0_1_391" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="96" x="0" y="0">
              <g id="SVGID_00000163795643689527251770000001174729360552588723_">
                <path d={svgPaths.p35a71d00} fill="var(--fill-0, white)" id="Vector_2" />
              </g>
            </mask>
            <g mask="url(#mask0_1_391)">
              <path d={svgPaths.p358fa400} fill="var(--fill-0, #404041)" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[54.71%] mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[8.564px] ml-0 mt-0 relative w-[3.05px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 9">
          <path d={svgPaths.p10fa7400} fill="var(--fill-0, #404041)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup />
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] h-[55.221px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[50.803px_25.536px] mask-size-[12.199px_12.215px] ml-[-416.46%] mt-[-209.05%] relative w-[95.97px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 56">
        <g id="Group">
          <path d={svgPaths.p35a71d00} fill="var(--fill-0, #404041)" id="Vector" />
          <g id="Clip path group">
            <mask height="56" id="mask0_1_381" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="96" x="0" y="0">
              <g id="SVGID_00000026878632921199062910000011208886912169607332_">
                <path d={svgPaths.p35a71d00} fill="var(--fill-0, white)" id="Vector_2" />
              </g>
            </mask>
            <g mask="url(#mask0_1_381)">
              <path d={svgPaths.p373c2a80} fill="var(--fill-0, #404041)" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[54.71%] mt-[40.1%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[12.215px] ml-0 mt-0 relative w-[12.199px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path d={svgPaths.p381b5f80} fill="var(--fill-0, #404041)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup1 />
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] h-[55.221px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[69.919px_17.138px] mask-size-[3.05px_20.614px] ml-[-2292.5%] mt-[-83.14%] relative w-[95.97px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 56">
        <g id="Group">
          <path d={svgPaths.p35a71d00} fill="var(--fill-0, #404041)" id="Vector" />
          <g id="Clip path group">
            <mask height="56" id="mask0_1_374" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="96" x="0" y="0">
              <g id="SVGID_00000095331437327043873870000010907534514742439317_">
                <path d={svgPaths.p35a71d00} fill="var(--fill-0, white)" id="Vector_2" />
              </g>
            </mask>
            <g mask="url(#mask0_1_374)">
              <path d={svgPaths.p14754d80} fill="var(--fill-0, #404041)" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[86.57%] mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[20.614px] ml-0 mt-0 relative w-[3.05px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 21">
          <path d={svgPaths.p12470200} fill="var(--fill-0, #404041)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup2 />
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] h-[55.221px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[74.925px_17.138px] mask-size-[3.05px_20.614px] ml-[-2456.65%] mt-[-83.14%] relative w-[95.97px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 56">
        <g id="Group">
          <path d={svgPaths.p35a71d00} fill="var(--fill-0, #404041)" id="Vector" />
          <g id="Clip path group">
            <mask height="56" id="mask0_1_413" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="96" x="0" y="0">
              <g id="SVGID_00000096777530214188021920000012247551020693052800_">
                <path d={svgPaths.p35a71d00} fill="var(--fill-0, white)" id="Vector_2" />
              </g>
            </mask>
            <g mask="url(#mask0_1_413)">
              <path d={svgPaths.p8e04e00} fill="var(--fill-0, #404041)" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group11 />
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[94.92%] mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[20.614px] ml-0 mt-0 relative w-[3.05px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 21">
          <path d={svgPaths.p12470200} fill="var(--fill-0, #404041)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup3 />
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] h-[55.221px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[64.913px_25.536px] mask-size-[3.05px_12.216px] ml-[-2128.35%] mt-[-209.04%] relative w-[95.97px]" data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 56">
        <g id="Group">
          <path d={svgPaths.p35a71d00} fill="var(--fill-0, #404041)" id="Vector" />
          <g id="Clip path group">
            <mask height="56" id="mask0_1_367" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="96" x="0" y="0">
              <g id="SVGID_00000029758879796706349250000013616121644618910880_">
                <path d={svgPaths.p35a71d00} fill="var(--fill-0, white)" id="Vector_2" />
              </g>
            </mask>
            <g mask="url(#mask0_1_367)">
              <path d={svgPaths.p11fe38f0} fill="var(--fill-0, #404041)" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group13 />
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[78.23%] mt-[40.1%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[12.216px] ml-0 mt-0 relative w-[3.05px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 13">
          <path d={svgPaths.p3ef0ce00} fill="var(--fill-0, #404041)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup4 />
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] h-[55.221px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[64.913px_20.573px] mask-size-[3.049px_3.054px] ml-[-2128.64%] mt-[-673.73%] relative w-[95.97px]" data-name="Group" style={{ maskImage: `url('${imgGroup4}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 56">
        <g id="Group">
          <path d={svgPaths.p35a71d00} fill="var(--fill-0, #404041)" id="Vector" />
          <g id="Clip path group">
            <mask height="56" id="mask0_1_403" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="96" x="0" y="0">
              <g id="SVGID_00000159450954925465366370000008927843554364142736_">
                <path d={svgPaths.p35a71d00} fill="var(--fill-0, white)" id="Vector_2" />
              </g>
            </mask>
            <g mask="url(#mask0_1_403)">
              <path d={svgPaths.p2e610900} fill="var(--fill-0, #404041)" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group15 />
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[78.23%] mt-[16.4%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[3.054px] ml-0 mt-0 relative w-[3.049px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p32ce67c0} fill="var(--fill-0, #404041)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup5 />
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] h-[55.221px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[36.18px_25.516px] mask-size-[12.568px_12.567px] ml-[-287.88%] mt-[-203.04%] relative w-[95.97px]" data-name="Group" style={{ maskImage: `url('${imgGroup5}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 56">
        <g id="Group">
          <path d={svgPaths.p35a71d00} fill="var(--fill-0, #404041)" id="Vector" />
          <g id="Clip path group">
            <mask height="56" id="mask0_1_346" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="96" x="0" y="0">
              <g id="SVGID_00000127728151019623630830000005356445023839017874_">
                <path d={svgPaths.p35a71d00} fill="var(--fill-0, white)" id="Vector_2" />
              </g>
            </mask>
            <g mask="url(#mask0_1_346)">
              <path d={svgPaths.p356ef780} fill="var(--fill-0, #404041)" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group17 />
    </div>
  );
}

function Group18() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.34%] mt-[40%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[12.567px] ml-0 mt-0 relative w-[12.568px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path d={svgPaths.pd5a5f80} fill="var(--fill-0, #404041)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup6 />
    </div>
  );
}

function Group19() {
  return (
    <div className="[grid-area:1_/_1] h-[55.221px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[17.975px_25.516px] mask-size-[16.376px_12.567px] ml-[-109.76%] mt-[-203.04%] relative w-[95.97px]" data-name="Group" style={{ maskImage: `url('${imgGroup6}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 56">
        <g id="Group">
          <path d={svgPaths.p35a71d00} fill="var(--fill-0, #404041)" id="Vector" />
          <g id="Clip path group">
            <mask height="56" id="mask0_1_437" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="96" x="0" y="0">
              <g id="SVGID_00000120519145236988493220000001563534305062775211_">
                <path d={svgPaths.p35a71d00} fill="var(--fill-0, white)" id="Vector_2" />
              </g>
            </mask>
            <g mask="url(#mask0_1_437)">
              <path d={svgPaths.p2053ba00} fill="var(--fill-0, #404041)" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group19 />
    </div>
  );
}

function Group20() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[40%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[12.567px] ml-0 mt-0 relative w-[16.376px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13">
          <path d={svgPaths.p11a4e530} fill="var(--fill-0, #404041)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup7 />
    </div>
  );
}

function Group21() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group6 />
      <Group8 />
      <Group10 />
      <Group12 />
      <Group14 />
      <Group16 />
      <Group18 />
      <Group20 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[65px] items-center justify-center left-0 top-0 w-[595px]">
      <WeBillNewEmailIcon />
      <Group21 />
    </div>
  );
}

function InvitationIcon() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="Invitation icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Invitation icon">
          <g id="Invitation icon_2">
            <path d={svgPaths.p34772a80} fill="var(--fill-0, #404041)" />
            <path d={svgPaths.pf5b9e40} fill="var(--fill-0, #404041)" />
            <path d={svgPaths.pb343d00} fill="var(--fill-0, #404041)" />
            <path d={svgPaths.p2acaa400} fill="var(--fill-0, #404041)" />
            <path d={svgPaths.p27ede80} fill="#FAA919" />
            <path d={svgPaths.p2ad48a10} fill="var(--fill-0, #404041)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Spacer() {
  return <div className="bg-[rgba(255,255,255,0)] h-[4px] shrink-0 w-full" data-name="📐 Spacer" />;
}

function ColumnForContentElements() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="🏛️ Column (For Content Elements)">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.21] min-w-full relative shrink-0 text-[44px] text-black text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        WeBill Invitation
      </p>
      <InvitationIcon />
      <Spacer />
    </div>
  );
}

function TitleTextButtonRowForContentColumns() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-center left-0 overflow-clip px-[64px] py-[30px] rounded-tl-[12px] rounded-tr-[12px] top-[77px] w-[600px]" data-name="🚣 Title, Text & Button (Row For Content Columns)">
      <ColumnForContentElements />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#404068] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[32px] py-[16px] relative rounded-[6px] shrink-0" data-name="🔗 Button">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Register</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#404068] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[32px] py-[16px] relative rounded-[6px] shrink-0" data-name="🔗 Button">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Copy Link</p>
    </div>
  );
}

function ColumnForContentElements1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="🏛️ Column (For Content Elements)">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1e1e1e] text-[23px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`You have been invited to be a user by {{org_name}} on the Webill system by {{invitee_name}}.`}</p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1e1e1e] text-[23px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Please click on the button below to complete the registration process,
      </p>
      <Button />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1e1e1e] text-[23px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        or copy and paste the link into your browser to complete the process.
      </p>
      <Button1 />
    </div>
  );
}

function TitleTextButtonRowForContentColumns1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-center left-0 overflow-clip px-[64px] py-[30px] rounded-tl-[12px] rounded-tr-[12px] top-[369px] w-[600px]" data-name="🚣 Title, Text & Button (Row For Content Columns)">
      <ColumnForContentElements1 />
    </div>
  );
}

function Frame1() {
  return (
    <a className="block cursor-pointer relative shrink-0 size-[24px]" href="https://www.linkedin.com/company/webill-pty-ltd/">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 17">
          <path d={svgPaths.p15dc4e00} fill="var(--fill-0, #FAA919)" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function FacebookSvgIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Facebook (SVG Icon)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Facebook (SVG Icon)">
          <path d={svgPaths.p24f36400} fill="var(--fill-0, #FAA919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIconLink() {
  return (
    <a className="box-border content-stretch cursor-pointer flex flex-col items-center justify-center min-h-[24px] min-w-[24px] overflow-clip p-0 relative shrink-0" data-name="🔗 Social Icon Link" href="https://www.facebook.com/webillsa/">
      <FacebookSvgIcon />
    </a>
  );
}

function YouTubeSvgIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="YouTube (SVG Icon)">
      <a className="absolute block cursor-pointer inset-[18.75%_8.33%]" data-name="Vector" href="https://www.youtube.com/@webillservices1563/featured">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
          <path d={svgPaths.p4092570} fill="var(--fill-0, #FAA919)" id="Vector" />
        </svg>
      </a>
    </div>
  );
}

function SocialIconLink1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[24px] min-w-[24px] overflow-clip relative shrink-0" data-name="🔗 Social Icon Link">
      <YouTubeSvgIcon />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[6.12%_0.78%_6.13%_1.16%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.232px_-0.224px] mask-size-[20px_18px]" data-name="Group" style={{ maskImage: `url('${imgGroup7}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Group">
          <path d={svgPaths.p11f1a300} fill="var(--fill-0, #FAA919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute bottom-[5%] contents left-0 right-0 top-[5%]" data-name="Clip path group">
      <Group22 />
    </div>
  );
}

function XSvgIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="X (SVG Icon)">
      <ClipPathGroup8 />
    </div>
  );
}

function SocialIconLink2() {
  return (
    <a className="box-border content-stretch cursor-pointer flex flex-col items-center justify-center min-h-[24px] min-w-[24px] overflow-clip p-0 relative shrink-0" data-name="🔗 Social Icon Link" href="https://x.com/webillsa">
      <XSvgIcon />
    </a>
  );
}

function InstagramSvgIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Instagram (SVG Icon)">
      <a className="absolute block cursor-pointer inset-[8.33%]" data-name="Vector" href="https://www.instagram.com/webillservices/">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p9d76b80} fill="var(--fill-0, #FAA919)" id="Vector" />
        </svg>
      </a>
    </div>
  );
}

function SocialIconLink3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[24px] min-w-[24px] overflow-clip relative shrink-0" data-name="🔗 Social Icon Link">
      <InstagramSvgIcon />
    </div>
  );
}

function Social() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-name="🐦 Social">
      <Frame1 />
      <SocialIconLink />
      <SocialIconLink1 />
      <SocialIconLink2 />
      <SocialIconLink3 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center justify-center leading-[normal] overflow-clip relative shrink-0 text-[#0091ff] text-[12px] text-center text-nowrap underline whitespace-pre" data-name="🍔 Navigation">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unsubscribe
      </p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        View in the browser
      </p>
    </div>
  );
}

function ColumnForContentElements2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="🏛️ Column (For Content Elements)">
      <Social />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center w-[min-content]">
        <p className="mb-0">WeBill (PTY) Ltd</p>
        <p>Wonderland Park, 147 North Reef Road, Bedfordview, 2007</p>
      </div>
      <Navigation />
    </div>
  );
}

function FooterStackedCenterRowForContentColumns() {
  return (
    <div className="absolute bg-[#f1f1f1] box-border content-stretch flex gap-[16px] items-center left-0 p-[32px] top-[1148px] w-[600px]" data-name="🚣 Footer Stacked Center (Row For Content Columns)">
      <ColumnForContentElements2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[848px]">
      <FooterStackedCenterRowForContentColumns />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] left-[64px] text-[#1e1e1e] text-[23px] top-[878px] w-[472px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Thanking you,
        <br aria-hidden="true" />
        The WeBill Team
      </p>
      <a className="absolute block cursor-pointer font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-[300px] text-[#1e1e1e] text-[23px] text-center top-[1028px] translate-x-[-50%] w-[472px]" href="https://www.webill.net" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5]">
          <span>{`Have a question? `}</span>
          <span className="text-[#0091ff]">support@webill.net</span>
          <span>
            <br aria-hidden="true" />
            {`Visit us at `}
          </span>
          <span className="text-[#0091ff]">www.webill.net</span>
        </p>
      </a>
      <div className="absolute h-0 left-[calc(50%-1px)] top-[848px] translate-x-[-50%] w-[472px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 1">
            <line id="Line 1" stroke="var(--stroke-0, #CCCCCC)" x2="472" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-1/2 top-[978px] translate-x-[-50%] w-[472px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 1">
            <line id="Line 1" stroke="var(--stroke-0, #CCCCCC)" x2="472" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function UsersInvitation() {
  return (
    <div className="bg-white relative size-full" data-name="USERS INVITATION">
      <Navbar />
      <Frame />
      <TitleTextButtonRowForContentColumns />
      <TitleTextButtonRowForContentColumns1 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] left-[63px] text-[#1e1e1e] text-[23px] top-[322px] w-[472px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Dear {{name}}:`}</p>
      <div className="absolute h-0 left-1/2 top-[310px] translate-x-[-50%] w-[472px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 1">
            <line id="Line 1" stroke="var(--stroke-0, #CCCCCC)" x2="472" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Group1 />
    </div>
  );
}