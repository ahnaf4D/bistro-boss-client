const SectionTitle = ({ massage, heading }) => {
  return (
    <div className='text-center font-inter my-10'>
      <span className='italic  text-[#D99904] text-xl'>---{massage}---</span>
      <div className='border-y-4 mx-64 py-4'>
        <h1 className='text-4xl  uppercase text-[#151515]'>{heading}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
