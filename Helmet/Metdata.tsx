import Head from 'next/head';
interface props {
  title: string;
}
function Metadata({ title }: props) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default Metadata;
