import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ReadmeMD from '../components/ReadmeMD';

const Home = ({ source }: { source?: any }) => {
  return (
    <div className="flex flex-col w-full h-full font-segoe-UI">
      <Navbar />
      <ReadmeMD>
        <MDXRemote {...source} components={{ Test: <></> }} />
      </ReadmeMD>
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
