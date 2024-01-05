import PropTypes from 'prop-types';

const ShareTitle = ({ smallTitle, largeTitle }) => {
      return (
            <>
                  <div className='text-center w-80 mx-auto'>
                        <p className='text-[#D99904] text-xl font-medium mb-3'>---{smallTitle}---</p>
                        <h1 className='text-4xl border-t-2 border-b-2 py-3'>{largeTitle}</h1>
                  </div>
            </>
      );
};

ShareTitle.propTypes = {
      smallTitle: PropTypes.string,
      largeTitle: PropTypes.string
}

export default ShareTitle;