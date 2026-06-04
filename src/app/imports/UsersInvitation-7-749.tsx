import svgPaths from "./svg-x0c2nr8l9d";
import imgRectangle from "figma:asset/0489283d4e6a67990eef211c1d7f3af18803252f.png";
import { imgGroup } from "./svg-hil8f";

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

function Header() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[65px] items-center justify-center left-0 top-0 w-[595px]" data-name="HEADER">
      <WeBillNewEmailIcon />
      <div className="h-[20.946px] relative shrink-0 w-[60px]" data-name="Webill Logo">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 21">
          <g id="Webill Logo">
            <path clipRule="evenodd" d={svgPaths.p31a0880} fill="var(--fill-0, #404041)" fillRule="evenodd" />
            <path d={svgPaths.p102dd00} fill="var(--fill-0, #404041)" />
            <path clipRule="evenodd" d={svgPaths.p78ae200} fill="var(--fill-0, #404041)" fillRule="evenodd" />
            <path d={svgPaths.p175f74b0} fill="var(--fill-0, #404041)" />
            <path d={svgPaths.p2a681480} fill="var(--fill-0, #404041)" />
            <path d={svgPaths.p17c8de40} fill="var(--fill-0, #404041)" />
            <path d={svgPaths.p8535900} fill="var(--fill-0, #404041)" />
          </g>
        </svg>
      </div>
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

function Main() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="MAIN">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.21] min-w-full relative shrink-0 text-[44px] text-black text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        WeBill Invitation
      </p>
      <InvitationIcon />
    </div>
  );
}

function WebillInvitationBanner() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-center left-0 overflow-clip px-[64px] py-[30px] rounded-tl-[12px] rounded-tr-[12px] top-[77px] w-[600px]" data-name="WEBILL INVITATION BANNER">
      <Main />
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

function BodyCopy() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="BODY COPY">
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

function BodyCopyAndButtons() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-center left-0 overflow-clip px-[64px] py-[30px] rounded-tl-[12px] rounded-tr-[12px] top-[369px] w-[600px]" data-name="BODY COPY AND BUTTONS">
      <BodyCopy />
    </div>
  );
}

function Frame() {
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

function Group5() {
  return (
    <div className="absolute inset-[6.12%_0.78%_6.13%_1.16%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.232px_-0.224px] mask-size-[20px_18px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Group">
          <path d={svgPaths.p11f1a300} fill="var(--fill-0, #FAA919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute bottom-[5%] contents left-0 right-0 top-[5%]" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function XSvgIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="X (SVG Icon)">
      <ClipPathGroup />
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
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-name="SOCIAL">
      <Frame />
      <SocialIconLink />
      <SocialIconLink1 />
      <SocialIconLink2 />
      <SocialIconLink3 />
    </div>
  );
}

function Unsubscribe() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center justify-center leading-[normal] overflow-clip relative shrink-0 text-[#0091ff] text-[12px] text-center text-nowrap underline whitespace-pre" data-name="UNSUBSCRIBE">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unsubscribe
      </p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        View in the browser
      </p>
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="FOOTER INFO">
      <Social />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center w-[min-content]">
        <p className="mb-0">WeBill (PTY) Ltd</p>
        <p>Wonderland Park, 147 North Reef Road, Bedfordview, 2007</p>
      </div>
      <Unsubscribe />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f1f1f1] box-border content-stretch flex gap-[16px] items-center left-0 p-[32px] top-[1148px] w-[600px]" data-name="FOOTER">
      <FooterInfo />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[848px]">
      <Footer />
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
      <Header />
      <WebillInvitationBanner />
      <BodyCopyAndButtons />
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