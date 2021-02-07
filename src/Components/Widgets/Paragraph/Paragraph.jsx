const Paragraph = ({ paragraph }) => {
  return <div dangerouslySetInnerHTML={{ __html: paragraph }}></div>;
};

export default Paragraph;
