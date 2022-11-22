import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import Environments from '../components/Environments';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Languages from '../components/Languages';
import Navbar from '../components/Navbar';
import ReadmeMD from '../components/ReadmeMD';

const Home = ({ source }: { source?: any }) => {
  return (
    <div className="bg-[#0d1117] flex flex-col w-full h-full font-segoe-UI">
      <Navbar />
      <Info />
      <ReadmeMD>
        <MDXRemote {...source} components={{ Test: <></> }} />
      </ReadmeMD>
      <Environments />
      <div className="h-[1px] shrink-0 bg-gray-600"></div>
      <Languages />
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
