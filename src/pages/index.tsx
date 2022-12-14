import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import Code from '../components/Code';
import Environments from '../components/Environments';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Languages from '../components/Languages';
import Navbar from '../components/Navbar';
import ReadmeMD from '../components/ReadmeMD';
import RepoNav from '../components/RepoNav';
import Sidebar from '../components/Sidebar';

const Home = ({ source }: { source?: any }) => {
  return (
    <div className="bg-[#0d1117] flex flex-col w-full h-full font-segoe-UI">
      <Navbar />
      <Info />
      <RepoNav />
      <div className="flex flex-row w-full h-full xl:px-[65px] xl:pt-[10px]">
        <div className="flex flex-col w-full h-full">
          <Code />
          <ReadmeMD>
            <MDXRemote {...source} components={{ Test: <></> }} />
          </ReadmeMD>
        </div>
        <Sidebar />
      </div>
      <div className="md:hidden">
        <Environments />
      </div>
      <div className="h-[1px] shrink-0 bg-gray-600 md:hidden"></div>
      <div className="md:hidden">
        <Languages />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const readmeFilePath = path.join(path.join(process.cwd(), 'src'), 'README.md');
  const source = fs.readFileSync(readmeFilePath);
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
};
