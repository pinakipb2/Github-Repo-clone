import Link from 'next/link';
import Github from './SVGS/Github';

const Footer = () => {
  return (
    <div className="bg-[#0d1117] w-full lg:px-[5%] px-[6%] md:px-[10%] py-2 space-y-4 pb-16">
      <div className="h-[0.3px] shrink-0 bg-gray-600 lg:mb-8"></div>
      <div className="lg:flex lg:gap-[60px] lg:justify-start space-y-4 lg:items-center lg:space-y-0">
        <div className="text-[#58a6ff] flex flex-wrap items-center justify-center gap-x-[16px] lg:gap-x-[30px] lg:grid-flow-col gap-y-[1px] text-[12px]">
          <span className="hover:underline hover:cursor-pointer">Terms</span>
          <span className="hover:underline hover:cursor-pointer">Privacy</span>
          <span className="hover:underline hover:cursor-pointer">Security</span>
          <span className="hover:underline hover:cursor-pointer">Status</span>
          <span className="hover:underline hover:cursor-pointer">Docs</span>
          <span className="hover:underline hover:cursor-pointer">Contact GitHub</span>
          <span className="hover:underline hover:cursor-pointer">Pricing</span>
          <span className="hover:underline hover:cursor-pointer">API</span>
          <span className="hover:underline hover:cursor-pointer">Training</span>
          <span className="hover:underline hover:cursor-pointer">Blog</span>
          <span className="hover:underline hover:cursor-pointer">About</span>
        </div>
        <div className="flex items-center justify-center text-[#8b949e] gap-2 text-[12px]  lg:order-first">
          <Link href="/">
            <Github className="fill-[#6e7681] hover:fill-[#999fa7] w-[24px] h-[25px]" />
          </Link>
          <span className="shrink-0">© {new Date().getFullYear()} GitHub, Inc.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
